<?php

namespace App\Traits\Validators;

trait ExtendedValidator
{
    private function validateSum($validator, $array, $field, $value)
    {
        if ($items = request($array)) {
            // validate
            $total = array_reduce($items, function ($carry, $item)  use ($field) {
                return $carry + $item[$field];
            }, 0);

            // add error message
            if ($total != $value) {
                $target = "{$array}_{$field}";
                $validator->errors()->add($target, "Total {$field} should be {$value}.");
            }
        }
    }

    protected function validatePolymorphicExist($validator, $array, $polymorphic)
    {
        if ($items = request($array)) {
            foreach ($items as $key => $item) {
                // check class
                $itemClass = resolve($item["{$polymorphic}_type"]);
                if (!$itemClass) {
                    $target = "{$array}.{$key}.{$polymorphic}_type";
                    $validator->errors()->add($target, 'Polymorphic type is not valid.');
                    return;
                } else {
                    // check model
                    $itemModel = $itemClass->find($item["{$polymorphic}_id"]);
                    if (!$itemModel) {
                        $target = "{$array}.{$key}.{$polymorphic}_id";
                        $validator->errors()->add($target, 'Polymorphic is not valid.');
                        return;
                    }
                }
            }
        }
    }

    protected function validatePolymorphicDistinct($validator, $array, $polymorphic)
    {
        if ($items = request($array)) {
            $group = [];
            foreach ($items as $key => $item) {
                $uniqueKey = $item["{$polymorphic}_type"] . $item["{$polymorphic}_id"];

                if (isset($group[$uniqueKey])) {
                    $target = "{$array}.{$key}.{$polymorphic}_id";
                    $validator->errors()->add($target, 'Polymorphic is not unique.');
                } else {
                    $group[$uniqueKey] = $item;
                }
            }
        }
    }
}
