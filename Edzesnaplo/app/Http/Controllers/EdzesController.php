<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Edzes;

class EdzesController extends Controller
{
    // POST /workouts
    public function store(Request $request)
    {
        $validated = $request->validate([
            'date' => 'required|date',
            'type' => 'required|string|max:50',
            'exercise' => 'required|string|max:100',
            'duration' => 'required|integer|min:1',
            'notes' => 'nullable|string|max:255',
        ]);

        $workout = Edzes::create($validated);
        return response()->json($workout, 201);
    }

    // GET /workouts
    public function index()
    {
        return Edzes::all();
    }

    // GET /workouts/type/{type}
    public function filterByType($type)
    {
        return Edzes::where('type', $type)->get();
    }

    // GET /workouts/date/{date}
    public function filterByDate($date)
    {
        return Edzes::where('date', $date)->get();
    }

    // GET /workouts/min-duration/{minutes}
    public function filterByMinDuration($minutes)
    {
        return Edzes::where('duration', '>=', $minutes)->get();
    }
}
