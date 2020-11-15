<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
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
                'name' => 'Inputor',
                'email' => 'inputor@gen.com',
                'password' => '@Inputor123',
                'role' => 'INPUTOR'
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@gen.com',
                'password' => '@Admin123',
                'role' => 'ADMIN'
            ],
        ];

        $roles = Role::all();

        foreach ($data as $d) {
            $user = User::withoutEvents(function () use ($d) {
                return User::create(array_merge(
                    Arr::except($d, 'role'),
                    ['password' => Hash::make($d['password'])]
                ));
            });

            $user->assignRole($roles->firstWhere('name', $d['role']));
        }
    }
}
