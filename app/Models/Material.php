<?php

namespace App\Models;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Scopes\ExtendedScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;
    use ClientQueryScope, ExtendedScope;

    protected $client_relations = ['user:id,name', 'matter:id,name',];
    protected $client_details = ['formulas'];
    protected $client_counts = ['formulas'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'matter_id',
        'user_id',
    ];

    /**
     * Client query scope
     */
    protected $clientQuery = [
        'filter' => [
            'user.name',
            'matter.name'
        ],
        'sorter' =>  [
            'user.name' => 'user_id',
            'matter.name' => 'matter_id'
        ]
    ];

    /**
     * Accessors
     */
    public function getNameAttribute($value)
    {
        return strtoupper($value);
    }

    /**
     * Relations
     */
    public function formulas()
    {
        return $this->hasMany(Formula::class);
    }

    public function matter()
    {
        return $this->belongsTo(Matter::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
