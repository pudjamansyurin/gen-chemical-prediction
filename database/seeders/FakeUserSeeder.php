<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class FakeUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create users
        User::withoutEvents(function () {
            return User::factory(100)->create();
        })->each(function ($user) {
            $role = Role::whereNotIn('name', ['ADMIN'])->inRandomOrder()->first();
            $user->assignRole($role);
        });
    }
}
