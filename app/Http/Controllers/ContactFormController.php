<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class ContactFormController extends Controller
{
    // public function post(){
    //     return Inertia::render('Welcome');
    // }

    public function show() {
        return response('Hello Worcccld', 200)
        ->header('Content-Type', 'text/plain');

    }

    public function index()
    {
        return response()->json(['name' => 'Abigail','state' => 'CA'], 400);

    }
 

    public function store(Request $request)
    {
        // User::create(
        //     $request->validate([
        //         'name' => ['required', 'max:50'],
        //         'email' => ['required', 'max:50', 'email'],
        //     ])
        // );

        // return to_route('users.index');
    }
}
