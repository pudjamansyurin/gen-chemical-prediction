<?php

namespace App\Observers;

use App\Models\Formula;

class FormulaObserver
{
    /**
     * Handle the Formula "saved" event.
     *
     * @param  \App\Models\Formula  $formula
     * @return void
     */
    public function saved(Formula $formula)
    {
        if ($materials = request('materials')) {
            $formula->materials()->sync(
                $this->preparePivotData($materials)
            );
        }

        if ($measurements = request('measurements')) {
            $formula->measurements()->sync(
                $this->preparePivotData($measurements)
            );
        }
    }

    private function preparePivotData($items)
    {
        $data = [];

        collect($items)
            ->each(function ($item) use (&$data) {
                $data[$item['id']] = [
                    'value' => $item['value']
                ];
            });

        return $data;
    }
}
