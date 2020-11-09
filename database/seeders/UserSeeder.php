<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
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
        $users = [
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

        foreach ($users as $user) {
            $theUser = User::withoutEvents(function () use ($user) {
                return User::create([
                    'name' => $user['name'],
                    'email' => $user['email'],
                    'password' => Hash::make($user['password'])
                ]);
            });

            $role = Role::firstWhere('name', $user['role']);
            $theUser->assignRole($role);
        }
    }
}
