<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserItem;
use Illuminate\Http\Request;
use App\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', User::class);

        // retrieve
        [$users, $total] = User::queried();

        // Response
        return (UserItem::collection($users))
            ->additional(['total' => $total]);
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

        // create
        $user = User::create($request->validated());

        return response(
            new UserItem($user->loadRelation()),
            Response::HTTP_CREATED
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        $this->authorize('update', $user);

        // update
        $user->update($request->validated());

        return response(
            new UserItem($user->loadRelation()),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $usersId = $request->ids;
        $this->authorize('delete', [User::class, $usersId]);

        // check
        if ($response = User::rejectWhenHas($usersId, [
            'sales', 'formulas', 'materials', 'matters', 'packages', 'packers', 'packs'
        ])) {
            return $response;
        }

        // delete
        User::destroy($usersId);
        return response($usersId, Response::HTTP_OK);
    }

    /**
     * Get roles
     */
    public function roles()
    {
        $this->authorize('role', User::class);

        return response([
            'data' => Role::all(['id', 'name'])
        ], Response::HTTP_OK);
    }
}
