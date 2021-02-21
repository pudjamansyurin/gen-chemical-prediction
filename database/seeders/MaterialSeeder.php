<?php

namespace Database\Seeders;

use App\Models\Material;
use App\Models\Matter;
use App\Models\User;
use App\Utils\CsvUtil;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class MaterialSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = (new CsvUtil())->getMaterials();

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
