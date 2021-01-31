<?php

namespace Database\Factories;

use App\Models\Estimator;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class EstimatorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Estimator::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->word,
            'desc' => $this->faker->text(100),
            'steps' => $this->faker->boolean(),
            'ranked' => $this->faker->boolean(),
            'user_id' => User::inRandomOrder()->first()->id,
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
