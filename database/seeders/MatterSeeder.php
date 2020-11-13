<?php

namespace Database\Seeders;

use App\Models\Matter;
use App\Models\User;
use Illuminate\Database\Seeder;

class MatterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'BASE OIL' => true,
            'ESTER' => true,
            'ADDITIVE' => true,
            'VM' => true,
            'MISC.' => false,
        ];

        $admin = User::role('ADMIN')->first();

        foreach ($data as $matter => $required) {
            Matter::withoutEvents(function () use ($matter, $required, $admin) {
                return Matter::create([
                    'name' => $matter,
                    'required' => $required,
                    'user_id' => $admin->id
                ]);
            });
        }
    }
}
