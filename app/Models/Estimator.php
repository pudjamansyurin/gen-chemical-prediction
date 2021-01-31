<?php

namespace App\Models;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Scopes\ModelExtension;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estimator extends Model
{
    use HasFactory;
    use ClientQueryScope, ModelExtension;

    protected $client_relations = ['user:id,name'];
    protected $client_details = [];
    protected $client_counts = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'desc',
        'steps',
        'ranked',
        'user_id'
    ];

    /**
     * Client query scope
     */
    protected $clientQuery = [
        'filter' => [
            'user.name',
        ],
        'sorter' =>  [
            'user.name' => 'user_id',
        ]
    ];

    /**
     * Relations
     */

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
