<?php

namespace App\Traits;

use League\Csv\Reader;

trait CsvSeeder
{
    public $misc = 'Misc.';

    public function csvLoad()
    {
        $reader = Reader::createFromPath(database_path('seeders/csv/Viskositas.csv'), 'r');
        $reader->setHeaderOffset(2);

        $measurements = $this->csvGetMeasurements($reader->getHeader());
        $formulas = $this->csvGetFormulas($reader->getRecords());
        $matters =  $this->csvGetMatters($reader->getRecords());
        $materials = $this->csvGetMaterials($reader->getRecords());

        return [
            'matters' => $matters,
            'materials' => $materials,
            'measurements' => $measurements,
            'formulas' => $formulas,
        ];
    }

    public function csvGetFormulas($records)
    {
        $formulas = [];
        $run = false;

        foreach ($records as $offset => $record) {
            if ($record['No'] == 1)
                $run = true;

            if ($run)
                if (!in_array($record['Entry'], array_keys($formulas))) {
                    $materials = $this->csvGetRecordMaterials($record);
                    $measurements = $this->csvGetRecordMeasurements($record);

                    if ($materials && $measurements)
                        $formulas[$record['Entry']] = [
                            'materials' => $materials,
                            'measurements' => $measurements,
                        ];
                }
        }

        return $formulas;
    }

    public function csvGetRecordMaterials($record)
    {
        $materials = [];
        $run = false;

        foreach ($record as $field => $value) {
            if ($field == 'Entry') {
                $run = true;
                continue;
            } else if ($field == 'Total') {
                $run = false;
                continue;
            }

            if ($run && is_numeric($value))
                if (!in_array($field, array_keys($materials)))
                    $materials[$field] = $value * 100 / $record["Total"];
        }

        return $materials;
    }

    public function csvGetRecordMeasurements($record)
    {
        $measurements = [];
        $run = false;

        foreach ($record as $field => $value) {
            if ($field == 'Total') {
                $run = true;
                continue;
            }

            if ($run && is_numeric($value))
                if (!in_array($field, array_keys($measurements)))
                    $measurements[$field] = $value;
        }

        return $measurements;
    }

    public function csvGetMaterials($records)
    {
        $materials = [];
        $run = false;

        foreach ($records as $record) {
            if ($this->csvSameStr($record['Entry'], 'Category')) {
                foreach ($record as $field => $matter) {
                    if ($field == 'Entry') {
                        $run = true;
                        continue;
                    } else if ($field == 'Total') {
                        $run = false;
                        break;
                    }

                    if ($run) {
                        if (!$matter) $matter = $this->misc;

                        if (!in_array($field, array_keys($materials)))
                            $materials[$field] = $matter;
                    }
                }
                break;
            }
        }

        return $materials;
    }


    public function csvGetMatters($records)
    {
        $matters = [];
        $run = false;

        foreach ($records as $record) {
            if ($this->csvSameStr($record['Entry'], 'Category')) {
                foreach ($record as $field => $matter) {
                    if ($field == 'Entry') {
                        $run = true;
                        continue;
                    } else if ($field == 'Total') {
                        $run = false;
                        break;
                    }

                    if ($run && $matter) {
                        $required = !$this->csvSameStr($matter, $this->misc);

                        if (!in_array($matter, array_keys($matters)))
                            $matters[$matter] = $required;
                    }
                }
                break;
            }
        }

        if (!in_array($this->misc, array_keys($matters)))
            $matters[$this->misc] = false;

        return $matters;
    }

    public function csvGetMeasurements($header)
    {
        $measurements = [];
        $run = false;

        foreach ($header as $field) {
            if ($field == 'Total') {
                $run = true;
                continue;
            }

            if ($run)
                if (!in_array($field, $measurements))
                    array_push($measurements, $field);
        }

        return $measurements;
    }

    private function csvSameStr($str1, $str2)
    {
        return (strcmp(strtolower($str1), strtolower($str2)) == 0);
    }
}
