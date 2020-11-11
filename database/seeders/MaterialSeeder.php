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
            [
                'name' => 'Cosco S4',
                'matter' => 'BASE OIL',
            ],
            [
                'name' => 'Cosco S6',
                'matter' => 'BASE OIL',
            ],
            [
                'name' => 'Cosco S8',
                'matter' => 'BASE OIL',
            ],
            [
                'name' => 'Genlube 0831',
                'matter' => 'ESTER',
            ],
            [
                'name' => 'Triester',
                'matter' => 'ESTER',
            ],
            [
                'name' => 'Priolube (Palm Ester 3970)',
                'matter' => 'ESTER',
            ],
            [
                'name' => 'CV 1103',
                'matter' => 'ADDITIVE',
            ],
            [
                'name' => 'SPAMA 52%',
                'matter' => 'VM',
            ],
            [
                'name' => 'VM - NMM (HV)',
                'matter' => 'VM',
            ],

        ];

        $misc = [
            'Genlube 135',
            'Genlube 165',
            'Genlube 6165',
            'Croda 3970',
            'C050 C80',
            'Genvis SPMA 20/5 - 41.5%',
            'Genvis SPAMA 3',
            'Genvis VM-HV',
            'Genvis SPAMA 52',
            'Genvis SPAMA 41',
            'N 150',
            'N 500',
            'PAMA 52%',
            'PAMA 62%-Z1',
            'SPAMA 20/5 - 41.5%',
            'VM - SPAMA 52%',
            'Lucant HC 600',
            'RF 6066',
            'Lubrizol VL 9101F',
            'FC 9250',
            'FC 9270',
            'WN 1014',
            'WN 2018',
            'WN 2112',
            'WN 2118',
            'WN 7014',
            'WN 9014',
            'WN 2010 B',
            'PV 1510'
        ];

        $matters = Matter::all();
        $admin = User::role('ADMIN')->first();

        foreach ($data as $d) {
            $matter = $matters->firstWhere('name', $d['matter']);
            $this->createMaterial(
                $d['name'],
                $matter->id,
                $admin->id
            );
        }

        foreach ($misc as $name) {
            $matter = $matters->firstWhere('name', 'MISC.');
            $this->createMaterial(
                $name,
                $matter->id,
                $admin->id
            );
        }
    }

    private function createMaterial($name, $matterId, $userId)
    {
        return Material::withoutEvents(function () use ($name, $matterId, $userId) {
            return Material::create(
                [
                    'name' => $name,
                    'matter_id' => $matterId,
                    'user_id' => $userId,
                ]
            );
        });
    }
}
