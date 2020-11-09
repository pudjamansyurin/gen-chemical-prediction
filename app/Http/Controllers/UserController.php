<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', User::class);

        [$users, $total] = User::queried();

        return Inertia::render('User/Index', [
            'items' => UserItem::collection($users),
            'total' => $total,
            'roles' => Role::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $this->authorize('create', User::class);

        $user = User::create(
            $this->transformPassword($request->validated())
        );

        return back()->with('status', 'New user added.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $this->authorize('view', $user);

        return new UserItem($user->loadRelation());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $this->authorize('update', $user);

        $user->update(
            $this->transformPassword($request->validated())
        );

        return back()->with('status', 'User updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request, $user)
    {
        $usersId = $request->ids;
        $this->authorize('delete', [User::class, $usersId]);

        // check
        // if ($response = User::rejectWhenHas($usersId, [])) {
        //     return $response;
        // }

        // delete
        User::destroy($usersId);

        return back()->with('status', 'User deleted.');
    }

    /**
     * Private functions
     */
    private function transformPassword($input)
    {
        if (array_key_exists('password', $input))
            $input['password'] = Hash::make($input['password']);

        return $input;
    }
}
