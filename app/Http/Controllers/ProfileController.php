<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Http\Resources\UserItem;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Laravel\Jetstream\Http\Controllers\Inertia\UserProfileController;

class ProfileController extends UserProfileController
{

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        // Response
        return Inertia::render('Profile/Show', [
            'sessions' => $this->sessions($request)->all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(ProfileRequest $request)
    {
        // $this->authorize('profile', User::class);

        // update
        $request->user()->update($request->validated());

        return back()->with('flash', 'Profile updated.');

        // return response(
        //     new UserItem($me->loadRelation()),
        //     Response::HTTP_OK
        // );
    }
}
