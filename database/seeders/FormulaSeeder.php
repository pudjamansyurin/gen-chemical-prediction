<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class FormulaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $data = [
        //     'F540-1' => [
        //         'Cosco S8' => 65.7,
        //         'Triester' => 10,
        //         'CV 1103' => 14.3,
        //         'SPAMA52' => 10
        //     ]
        // ];

        // $admin = User::role('ADMIN')->first();

        // foreach ($data as $d) {
        //     Measurement::withoutEvents(function () use ($d, $admin) {
        //         return Measurement::create(array_merge($d, [
        //             'user_id' => $admin->id
        //         ]));
        //     });
        // }
    }
}
