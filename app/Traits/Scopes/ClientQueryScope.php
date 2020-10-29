<?php

namespace App\Traits\Scopes;

trait ClientQueryScope
{
    /**
     * Local scopes
     */
    public function scopeQueried()
    {
        return [
            $this->getQueried(),
            $this->countQueried()
        ];
    }

    public function scopeLoadRelationDetailed()
    {
        return $this
            ->load(array_merge(
                $this->client_relations ?? [],
                $this->client_details ?? []
            ))
            ->loadCount($this->client_counts ?? []);
    }

    public function scopeLoadRelation()
    {
        return $this
            ->load(array_merge(
                $this->client_relations ?? [],
            ))->loadCount($this->client_counts ?? []);
    }

    protected function scopeWithRelation()
    {
        return $this
            ->with(array_merge(
                $this->client_relations ?? [],
            ))->withCount($this->client_counts ?? []);
    }

    protected function scopeGetQueried()
    {
        return $this->withRelation()
            ->filtered()
            ->sortered()
            ->limited()
            ->get();
    }

    protected function scopeCountQueried()
    {
        return $this->withRelation()
            ->filtered()
            // ->sortered()
            ->count();
    }

    protected function scopeFiltered($q)
    {
        // filtering
        $search = request('search', '');
        $mine = request()->boolean('mine');

        if ($search) {
            // handle select options request
            $fields = $this->fields();

            // handle this model
            $q = $q->where(function ($q) use ($fields, $search) {
                foreach ($fields as $field) {
                    $q->orWhere($field, 'LIKE', "%{$search}%");
                }
            });

            // handle relations model
            $filter = $this->filter();
            foreach ($filter as $key => $relationFields) {
                [$relation, $field] = explode(".", $relationFields);

                $q = $q->orWhereHas($relation, function ($q) use ($field, $search) {
                    $q->where(function ($q) use ($field, $search) {
                        $q->orWhere($field, 'LIKE', "%{$search}%");
                    });
                });
            };
        }

        // retrive current user data
        if ($mine) {
            $q->where('user_id', auth()->id());
        }

        return $q;
    }

    protected function scopeSortered($q)
    {
        // get parameters
        $sortBy = request('sortBy.0', 'updated_at');
        $sortDesc = request()->boolean('sortDesc.0', true);
        // sorting
        $sorter = $this->sorter();
        if (array_key_exists($sortBy, $sorter)) {
            $sortBy = $sorter[$sortBy];
        }
        $q = $q->orderBy($sortBy, $sortDesc ? 'desc' : 'asc');

        return $q;
    }

    protected function scopeLimited($q)
    {
        // get parameters
        $page = request('page', 1);
        $itemsPerPage = request('itemsPerPage', 10);
        // limiting
        if ($itemsPerPage > 0) {
            $q = $q->take($itemsPerPage)->skip(($page - 1) * $itemsPerPage);
        }

        return $q;
    }

    /**
     * Get parameters from request queries
     */
    private function fields()
    {
        if (property_exists($this, 'fillable')) {
            return array_filter($this->fillable, function ($item) {
                return strpos($item, "_id") === false;
            });
        }
        return [];
    }

    private function filter()
    {
        if (property_exists($this, 'clientQuery')) {
            if (array_key_exists('filter', $this->clientQuery)) {
                return $this->clientQuery['filter'];
            }
        }
        return [];
    }

    private function sorter()
    {
        if (property_exists($this, 'clientQuery')) {
            if (array_key_exists('sorter', $this->clientQuery)) {
                return $this->clientQuery['sorter'];
            }
        }
        return [];
    }
}
