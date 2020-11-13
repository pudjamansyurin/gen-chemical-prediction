<?php

namespace Database\Seeders;

use App\Models\Measurement;
use App\Models\User;
use App\Traits\CsvSeeder;
use Illuminate\Database\Seeder;

class MeasurementSeeder extends Seeder
{
    use CsvSeeder;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = $this->csvLoad()['measurements'];

        $admin = User::role('ADMIN')->first();

        foreach ($data as $measurement) {
            Measurement::withoutEvents(function () use ($measurement, $admin) {
                return Measurement::create([
                    'name' => $measurement,
                    'user_id' => $admin->id
                ]);
            });
        }
    }
}
