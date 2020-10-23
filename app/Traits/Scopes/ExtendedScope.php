<?php

namespace App\Traits\Scopes;

use Illuminate\Http\Request;
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

    public static function rejectWhenHas($ids, $relations = [])
    {
        foreach ($relations as $relation) {
            // check: Relation
            if (self::countRelation($ids, $relation)) {
                $relation = Str::upper($relation);
                // failed
                return response([
                    'message' => "Still used by {$relation}."
                ], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        }
        return;
    }
}
