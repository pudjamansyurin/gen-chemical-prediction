<?php

namespace Database\Seeders;

use App\Models\Matter;
use App\Models\User;
use App\Utils\CsvUtil;
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
        $data = (new CsvUtil())->getMatters();

        $user = User::role('ADMIN')->first();

        foreach ($data as $matter => $required) {
            Matter::withoutEvents(function () use ($matter, $required, $user) {
                return Matter::create([
                    'name' => $matter,
                    'required' => $required,
                    'user_id' => $user->id
                ]);
            });
        }
    }
}
