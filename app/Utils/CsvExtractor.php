<?php

namespace App\Utils;

use League\Csv\Reader;

class CsvExtractor
{
    private $termNumber = 'No';
    private $termEntry = 'Entry';
    private $termTotal = 'Total';

    private $termMisc = 'Misc.';
    private $termCategory = 'Category';

    private $primaryMeasurements = [
        'KV 40',
        'KV 100',
    ];

    private $header = [];
    private $records = [];

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

        $records = $this->parseRecordFormula();

        foreach ($records as $record)
            if (!in_array($record[$this->termEntry], array_keys($formulas))) {
                $materials = $this->getRecordMaterials($record);
                $measurements = $this->getRecordMeasurements($record);

                if ($materials && $measurements)
                    $formulas[$record[$this->termEntry]] = [
                        'materials' => $materials,
                        'measurements' => $measurements,
                    ];
            }

        return $formulas;
    }

    public function getMaterials()
    {
        $materials = [];

        $record = $this->parseRecordCategory();

        foreach ($record as $field => $matter)
            if (!in_array($field, array_keys($materials))) {
                if (!$matter) $matter = $this->termMisc;
                $materials[$field] = $matter;
            }


        return $materials;
    }

    public function getMatters()
    {
        $matters = [];

        $record = $this->parseRecordCategory();

        foreach ($record as $field)
            if ($field)
                if (!in_array($field, array_keys($matters))) {
                    $required = !$this->isSameStr($field, $this->termMisc);
                    $matters[$field] = $required;
                }


        if (!in_array($this->termMisc, array_keys($matters)))
            $matters[$this->termMisc] = false;

        return $matters;
    }

    public function getMeasurements()
    {
        $measurements = [];

        $header = $this->parseColumn($this->header, true);

        foreach ($header as $field)
            if (!in_array($field, array_keys($measurements))) {
                $primary = false;
                foreach ($this->primaryMeasurements as $primaryMeasurement)
                    if ($this->isSameStr($field, $primaryMeasurement)) {
                        $primary = true;
                        break;
                    }

                $measurements[$field] = $primary;
            }

        return $measurements;
    }

    private function getRecordMaterials($record)
    {
        $materials = [];

        $total = $record[$this->termTotal];

        $record = $this->parseColumn($record);

        foreach ($record as $field => $value)
            if (is_numeric($value))
                if (!in_array($field, array_keys($materials)))
                    $materials[$field] = $value * 100 / $total;

        return $materials;
    }

    private function getRecordMeasurements($record)
    {
        $measurements = [];

        $record = $this->parseColumn($record, true);

        foreach ($record as $field => $value)
            if (is_numeric($value))
                if (!in_array($field, array_keys($measurements)))
                    $measurements[$field] = $value;

        return $measurements;
    }

    private function parseRecordCategory()
    {
        foreach ($this->records as $record)
            if ($this->isSameStr($record[$this->termEntry], $this->termCategory))
                break;

        return $this->parseColumn($record);
    }

    private function parseRecordFormula()
    {
        $records = [];

        foreach ($this->records as $record)
            if (is_numeric($record[$this->termNumber]))
                $records[] = $record;

        return $records;
    }

    private function parseColumn($record, $measurements = false)
    {
        $start = array_search($this->termEntry, $this->header);
        $stop = array_search($this->termTotal, $this->header);

        if ($measurements) {
            $start = $stop;
            $stop = null;
        }

        return (array_filter($record, function ($key) use ($start, $stop) {
            if (!is_numeric($key))
                $key = array_search($key, $this->header);

            $pass = $key > $start;
            if ($stop)
                $pass = $pass && $key < $stop;

            return $pass;
        }, ARRAY_FILTER_USE_KEY));
    }

    private function isSameStr($str1, $str2)
    {
        return (strcmp(strtolower($str1), strtolower($str2)) == 0);
    }
}
