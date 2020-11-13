<?php

namespace Database\Seeders;

use App\Models\Matter;
use App\Models\User;
use App\Traits\CsvSeeder;
use Illuminate\Database\Seeder;

class MatterSeeder extends Seeder
{
    use CsvSeeder;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = $this->csvLoad()['matters'];

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
