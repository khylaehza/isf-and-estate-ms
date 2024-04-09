<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $request->validate([
                'fname' => 'required|string|max:255',
                'mname' => 'nullable|string|max:255',
                'lname' => 'required|string|max:255',
                'uname' => 'required|string|unique:users',
                'role' => 'required|string|max:100',
                'email' => 'required|email|unique:users,email',
                'department' => 'required|string|max:100',
                'password' => 'required'
            ]);

            User::create([
                'fname' => $request->fname,
                'mname' => $request->mname,
                'lname' => $request->lname,
                'uname' => $request->uname,
                'role' => $request->role,
                'email' => $request->email,
                'department' => $request->department,
                'password' => bcrypt($request->password)
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User registered successfully.',

            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'User registration failed. ' . $e->getMessage(),

            ]);
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'uname' => 'required|string',
                'password' => 'required'
            ]);

            $user = User::where('uname', $request->uname)->first();

            if (!empty($user)) {
                if (Hash::check($request->password, $user->password)) {
                    $token = $user->createToken('token')->plainTextToken;

                    return response()->json([
                        'status' => true,
                        'message' => 'User logged in.',
                        'token' => $token,
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'message' => 'Invalid password.',

                    ]);
                }
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Account does not exist.',

                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Login failed. ' . $e->getMessage(),
            ]);
        }
    }

    public function profile()
    {
        try {
            $userData = auth()->user();

            return response()->json([
                'status' => true,
                'message' => 'Get user info successful.',
                'data' => $userData,
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Get user info failed. ' . $e->getMessage(),
            ]);
        }
    }

    public function logout()
    {
        try {
            auth()->user()->tokens()->delete();
            return response()->json([
                'status' => true,
                'message' => 'User logged out successfully.',
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Logout failed. ' . $e->getMessage(),
            ]);
        }

    }
}
