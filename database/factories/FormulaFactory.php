<?php

namespace Database\Factories;

use App\Models\Formula;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class FormulaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Formula::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->word,
            'note' => $this->faker->text(100),
            'user_id' => User::inRandomOrder()->first()->id,
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
