<?php

namespace App\Utils;

use League\Csv\Reader;

class CsvExtractor
{
    protected $term_misc = 'Misc.';
    protected $term_category = 'Category';

    protected $header = [];
    protected $records = [];

    public function __construct($file = 'database/seeders/csv/Viskositas.csv')
    {
        $this->load($file);
    }

    private function load($file)
    {
        $reader = Reader::createFromPath(base_path($file), 'r');
        $reader->setHeaderOffset(2);

        $this->header = $reader->getHeader();
        $this->records = $reader->getRecords();
    }

    public function getFormulas()
    {
        $formulas = [];
        $run = false;

        foreach ($this->records as $offset => $record) {
            if ($record['No'] == 1)
                $run = true;

            if ($run)
                if (!in_array($record['Entry'], array_keys($formulas))) {
                    $materials = $this->getRecordMaterials($record);
                    $measurements = $this->getRecordMeasurements($record);

                    if ($materials && $measurements)
                        $formulas[$record['Entry']] = [
                            'materials' => $materials,
                            'measurements' => $measurements,
                        ];
                }
        }

        return $formulas;
    }

    public function getMaterials()
    {
        $materials = [];
        $run = false;

        foreach ($this->records as $record) {
            if ($this->isSameStr($record['Entry'], $this->term_category)) {
                foreach ($record as $field => $matter) {
                    if ($field == 'Entry') {
                        $run = true;
                        continue;
                    } else if ($field == 'Total') {
                        $run = false;
                        break;
                    }

                    if ($run) {
                        if (!$matter) $matter = $this->term_misc;

                        if (!in_array($field, array_keys($materials)))
                            $materials[$field] = $matter;
                    }
                }
                break;
            }
        }

        return $materials;
    }

    public function getMatters()
    {
        $matters = [];
        $run = false;

        foreach ($this->records as $record) {
            if ($this->isSameStr($record['Entry'], $this->term_category)) {
                foreach ($record as $field => $matter) {
                    if ($field == 'Entry') {
                        $run = true;
                        continue;
                    } else if ($field == 'Total') {
                        $run = false;
                        break;
                    }

                    if ($run && $matter) {
                        $required = !$this->isSameStr($matter, $this->term_misc);

                        if (!in_array($matter, array_keys($matters)))
                            $matters[$matter] = $required;
                    }
                }
                break;
            }
        }

        if (!in_array($this->term_misc, array_keys($matters)))
            $matters[$this->term_misc] = false;

        return $matters;
    }

    public function getMeasurements()
    {
        $measurements = [];
        $run = false;

        foreach ($this->header as $field) {
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

    private function getRecordMaterials($record)
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

    private function getRecordMeasurements($record)
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

    private function isSameStr($str1, $str2)
    {
        return (strcmp(strtolower($str1), strtolower($str2)) == 0);
    }
}
