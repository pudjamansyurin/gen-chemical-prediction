<?php

namespace App\Traits;

use App\Models\Measurement;

trait LearnerExtension
{
    private function getFormulas($targetId, $requiredMaterialIds, $excludedMaterialIds)
    {
        $target = Measurement::find($targetId);
        $requiredMaterialIds = collect($requiredMaterialIds);
        $excludedMaterialIds = collect($excludedMaterialIds);

        $q = $target->formulas()
            ->with([
                'materials',
                'measurements' => function ($q) use ($targetId) {
                    $q->where('measurement_id', $targetId);
                },
            ]);

        $requiredMaterialIds->each(function ($materialId) use (&$q) {
            $q->whereHas('materials', function ($q) use ($materialId) {
                $q->where('material_id', $materialId);
            });
        });

        $excludedMaterialIds->each(function ($materialId) use (&$q) {
            $q->whereDoesntHave('materials', function ($q) use ($materialId) {
                $q->where('material_id', $materialId);
            });
        });

        return $q->get();
    }

    private function makeData($formulas)
    {
        return $formulas
            ->pipe(function ($formulas) {
                $features = $formulas
                    ->pluck('materials')
                    ->map(function ($items) {
                        return $items->map(function ($item) {
                            return (object) $item->only('id', 'name');
                        });
                    })
                    ->flatten()
                    ->unique()
                    ->values();

                $samples = $formulas
                    ->pluck('materials')
                    ->map(function ($item) {
                        return $item->pluck('pivot.value', 'name');
                    })
                    ->map(function ($item) use ($features) {
                        return $features
                            ->mapWithKeys(function ($feature) use ($item) {
                                return [$feature->id => $item->get($feature->name, 0)];
                            })
                            ->all();
                    });

                $features = $features
                    ->map(function ($feature) use ($samples) {
                        return (object) array_merge(
                            (array) $feature,
                            ['count' => $samples->where($feature->id)->count()]
                        );
                    });

                $labels = $formulas
                    ->pluck('measurements.0.pivot.value', 'name');

                return (object) [
                    'features' => $features->all(),
                    'samples' => $samples->all(),
                    'labels' => $labels->all()
                ];
            });
    }
}
