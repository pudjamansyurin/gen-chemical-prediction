<?php

namespace App\Models;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Scopes\ModelExtension;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Measurement extends Model
{
    use HasFactory;
    use ClientQueryScope, ModelExtension;

    protected $client_relations = ['user:id,name'];
    protected $client_details = ['formulas'];
    protected $client_counts = ['formulas'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'primary',
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
     * Accessors
     */
    // public function getNameAttribute($value)
    // {
    //     return strtoupper($value);
    // }

    /**
     * Relations
     */
    public function formulas()
    {
        return $this->belongsToMany(Formula::class);
        // ->withPivot(['value']);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
