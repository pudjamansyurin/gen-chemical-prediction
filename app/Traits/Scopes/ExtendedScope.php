<?php

namespace App\Traits\Scopes;

use Illuminate\Http\Response;
use Illuminate\Support\Str;

trait ExtendedScope
{
    /**
     * Local scopes
     */
    public function scopeGetAsList()
    {
        return $this->all(['id', 'name']);
    }

    public function scopeCountRelation($query, $ids, $relation)
    {
        return $query->has($relation)->whereIn('id', $ids)->count();
    }

    public static function validateRelation($ids, $relations)
    {
        $ids = is_array($ids) ? $ids : [$ids];
        $relations = is_array($relations) ? $relations : [$relations];

        foreach ($relations as $relation)
            if (self::countRelation($ids, $relation))
                return ['ids' => ["still-used-by-{$relation}"]];

        return;
    }
}
