<?php

namespace Database\Seeders;

use App\Models\Measurement;
use App\Models\User;
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
        $data = [
            'KV 40',
            'KV 100',
            'VI',
            'HTHS',
            'CCS',
            'Pour Point',
            'Noack',
            '4 Ball (WSD/Coef. Friction)'
        ];

        $admin = User::role('ADMIN')->first();

        foreach ($data as $d) {
            Measurement::withoutEvents(function () use ($d, $admin) {
                return Measurement::create(array_merge($d, [
                    'user_id' => $admin->id
                ]));
            });
        }
    }
}
