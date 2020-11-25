<?php

namespace App\Traits;

use App\Models\Measurement;

trait LearnerExtension
{
    private function getFormulas($targetId, $materialIds)
    {
        $target = Measurement::find($targetId);
        $materialIds = collect($materialIds);

        $q = $target->formulas()
            ->with([
                'materials',
                'measurements' => function ($q) use ($targetId) {
                    $q->where('measurement_id', $targetId);
                },
            ]);

        $materialIds->each(function ($materialId) use (&$q) {
            $q->whereHas('materials', function ($q) use ($materialId) {
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
                    ->map(function ($item) {
                        return $item->pluck('name');
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
                                return [$feature => $item->get($feature, 0)];
                            })
                            ->all();
                    });

                $features = $features->map(function ($feature) use ($samples) {
                    return (object) [
                        'name' => $feature,
                        'rows' => $samples->where($feature)->count()
                    ];
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
