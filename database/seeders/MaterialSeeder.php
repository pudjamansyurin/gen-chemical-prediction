<?php

namespace Database\Seeders;

use App\Models\Material;
use App\Models\Matter;
use App\Models\User;
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
        $data = [
            'BASE_OIL' => 'Cosco S4',
            'BASE_OIL' => 'Cosco S6',
            'BASE_OIL' => 'Cosco S8',
            'ESTER' => 'Genlube 0831',
            'ESTER' => 'Triester',
            'ESTER' => 'Priolube (Palm Ester 3970)',
            'ADDITIVE' => 'CV 1103',
            'VM' => 'SPAMA 52%',
            'VM' => 'VM - NMM (HV)',

            'MISC.' => 'Genlube 135',
            'MISC.' => 'Genlube 165',
            'MISC.' => 'Genlube 6165',
            'MISC.' => 'Croda 3970',
            'MISC.' => 'C050 C80',
            'MISC.' => 'Genvis SPMA 20/5 - 41.5%',
            'MISC.' => 'Genvis SPAMA 3',
            'MISC.' => 'Genvis VM-HV',
            'MISC.' => 'Genvis SPAMA 52',
            'MISC.' => 'Genvis SPAMA 41',
            'MISC.' => 'N 150',
            'MISC.' => 'N 500',
            'MISC.' => 'PAMA 52%',
            'MISC.' => 'PAMA 62%-Z1',
            'MISC.' => 'SPAMA 20/5 - 41.5%',
            'MISC.' => 'VM - SPAMA 52%',
            'MISC.' => 'Lucant HC 600',
            'MISC.' => 'RF 6066',
            'MISC.' => 'Lubrizol VL 9101F',
            'MISC.' => 'FC 9250',
            'MISC.' => 'FC 9270',
            'MISC.' => 'WN 1014',
            'MISC.' => 'WN 2018',
            'MISC.' => 'WN 2112',
            'MISC.' => 'WN 2118',
            'MISC.' => 'WN 7014',
            'MISC.' => 'WN 9014',
            'MISC.' => 'WN 2010 B',
            'MISC.' => 'PV 1510',
        ];

        $matters = Matter::all();
        $admin = User::role('ADMIN')->first();

        foreach ($data as $matter => $material) {
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
