<?php

namespace Database\Seeders;

use App\Models\Formula;
use App\Models\Material;
use App\Models\Measurement;
use App\Models\User;
use App\Traits\CsvSeeder;
use Illuminate\Database\Seeder;

class FormulaSeeder extends Seeder
{
    use CsvSeeder;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = $this->csvLoad()['formulas'];

        $admin = User::role('ADMIN')->first();
        $materials = Material::all();
        $measurements = Measurement::all();

        foreach ($data as $key => $param) {
            $formula = Formula::withoutEvents(function () use ($key, $admin) {
                return Formula::create([
                    'name' => $key,
                    'note' => '',
                    'user_id' => $admin->id
                ]);
            });

            if ($formula) {
                $data = [];
                foreach ($param['materials'] as $key => $value)
                    if ($material = $materials->firstWhere('name', $key))
                        $data[$material->id] = [
                            'value' => $value
                        ];
                $formula->materials()->attach($data);

                $data = [];
                foreach ($param['measurements'] as $key => $value)
                    if ($measurement = $measurements->firstWhere('name', $key))
                        $data[$measurement->id] = [
                            'value' => $value
                        ];
                $formula->measurements()->attach($data);
            }
        }
    }
}
