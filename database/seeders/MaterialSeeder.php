<?php

namespace Database\Seeders;

use App\Models\Material;
use App\Models\Matter;
use App\Models\User;
use App\Traits\CsvSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class MaterialSeeder extends Seeder
{
    use CsvSeeder;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = $this->csvLoad()['materials'];

        // $user = User::role('ADMIN')->first();
        $matters = Matter::all();

        foreach ($data as $material => $matter) {
            $matter = $matters->firstWhere('name', $matter);
            $user = User::inRandomOrder()->first();

            Material::withoutEvents(function () use ($material, $matter, $user) {
                return Material::create([
                    'name' => $material,
                    'matter_id' => $matter->id,
                    'user_id' => $user->id
                ]);
            });
        }
    }
}
