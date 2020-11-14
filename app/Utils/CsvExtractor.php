<?php

namespace App\Utils;

use League\Csv\Reader;

class CsvExtractor
{
    private $term_no = 'No';
    private $term_entry = 'Entry';
    private $term_total = 'Total';

    private $term_misc = 'Misc.';
    private $term_category = 'Category';

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
            if (!in_array($record[$this->term_entry], array_keys($formulas))) {
                $materials = $this->getRecordMaterials($record);
                $measurements = $this->getRecordMeasurements($record);

                if ($materials && $measurements)
                    $formulas[$record[$this->term_entry]] = [
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
                if (!$matter) $matter = $this->term_misc;
                $materials[$field] = $matter;
            }


        return $materials;
    }

    public function getMatters()
    {
        $matters = [];

        $record = $this->parseRecordCategory();

        foreach ($record as $matter)
            if ($matter)
                if (!in_array($matter, array_keys($matters))) {
                    $required = !$this->isSameStr($matter, $this->term_misc);
                    $matters[$matter] = $required;
                }


        if (!in_array($this->term_misc, array_keys($matters)))
            $matters[$this->term_misc] = false;

        return $matters;
    }

    public function getMeasurements()
    {
        $measurements = [];

        $header = $this->parseColumn($this->header, true);

        foreach ($header as $field)
            if (!in_array($field, $measurements))
                array_push($measurements, $field);

        return $measurements;
    }

    private function getRecordMaterials($record)
    {
        $materials = [];

        $total = $record[$this->term_total];

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
            if ($this->isSameStr($record[$this->term_entry], $this->term_category))
                break;

        return $this->parseColumn($record);
    }

    private function parseRecordFormula()
    {
        $records = [];

        foreach ($this->records as $record)
            if (is_numeric($record[$this->term_no]))
                $records[] = $record;

        return $records;
    }

    private function parseColumn($record, $measurements = false)
    {
        $start = array_search($this->term_entry, $this->header);
        $stop = array_search($this->term_total, $this->header);

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
