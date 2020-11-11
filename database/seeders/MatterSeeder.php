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
            [
                'name' => 'BASE OIL',
                'required' => true,
            ],
            [
                'name' => 'ESTER',
                'required' => true,
            ],
            [
                'name' => 'ADDITIVE',
                'required' => true,
            ],
            [
                'name' => 'VM',
                'required' => true,
            ],
            [
                'name' => 'MISC.',
                'required' => false,
            ]
        ];

        $admin = User::role('ADMIN')->first();

        foreach ($data as $d) {
            Matter::withoutEvents(function () use ($d, $admin) {
                return Matter::create(array_merge($d, [
                    'user_id' => $admin->id
                ]));
            });
        }
    }
}
