<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RolesAndPermissionSeeder::class,
            UserSeeder::class,
            MatterSeeder::class,
            MaterialSeeder::class,
            MeasurementSeeder::class,
            FormulaSeeder::class,

            FakeUserSeeder::class,
        ]);
    }
}
