<?php

namespace Database\Factories;

use App\Models\Measurement;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class MeasurementFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Measurement::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->word,
            'user_id' => User::inRandomOrder()->first()->id,
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
