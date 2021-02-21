<?php

namespace Database\Seeders;

use App\Models\Measurement;
use App\Models\User;
use App\Utils\CsvUtil;
use Illuminate\Database\Seeder;

class MeasurementSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = (new CsvUtil())->getMeasurements();

        $user = User::role('ADMIN')->first();

        foreach ($data as $measurement => $primary) {
            Measurement::withoutEvents(function () use ($measurement, $primary, $user) {
                return Measurement::create([
                    'name' => $measurement,
                    'primary' => $primary,
                    'user_id' => $user->id
                ]);
            });
        }
    }
}
