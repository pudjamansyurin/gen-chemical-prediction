<?php

namespace App\Models;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Scopes\ExtendedScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formula extends Model
{
    use HasFactory;
    use ClientQueryScope, ExtendedScope;

    protected $client_relations = ['user:id,name'];
    protected $client_details = ['materials', 'measurements'];
    protected $client_counts = ['materials', 'measurements'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'note',
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
     * Scopes
     */
    // public function scopePrimaryMeasurements($query)
    // {
    // }

    /**
     * Relations
     */
    public function materials()
    {
        return $this->belongsToMany(Material::class)
            ->withPivot(['value']);
    }

    public function measurements()
    {
        return $this->belongsToMany(Measurement::class)
            ->withPivot(['value']);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
