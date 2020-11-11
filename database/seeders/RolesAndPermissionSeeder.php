<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $models = [
            'user'
        ];
        $actions = [
            'view',
            'create',
            'update',
            'delete',
        ];
        $roles = [
            'INPUTOR' => [],
            'ADMIN' => [
                'user' => '*',
            ],
        ];

        // create permissions
        foreach ($models as $model)
            foreach ($actions as $action)
                Permission::create(['name' => "{$model}.{$action}"]);

        // create roles
        foreach ($roles as $role => $models) {
            $theRole = Role::create(['name' => $role]);
            foreach ($models as $model => $action) {
                $theActions = (is_array($action) ? $action : $actions);

                // apply actions to this role-model
                foreach ($theActions as $theAction)
                    $theRole->givePermissionTo("{$model}.{$theAction}");
            }
        }
    }
}
