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

        $matters = Matter::all();
        $admin = User::role('ADMIN')->first();

        foreach ($data as $material => $matter) {
            $matter = $matters->firstWhere('name', $matter);

            Material::withoutEvents(function () use ($material, $matter, $admin) {
                return Material::create([
                    'name' => $material,
                    'matter_id' => $matter->id,
                    'user_id' => $admin->id
                ]);
            });
        }
    }
}
