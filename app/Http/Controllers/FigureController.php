<?php

namespace App\Http\Controllers;

use App\Models\Editor;
use App\Models\Figure;
use App\Models\Series;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FigureController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $figures = Figure::all();
        return view('figures.index', compact('figures'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $editors = Editor::orderBy('name')->get();
        $series  = Series::orderBy('name')->get();

        return view('figures.create', compact('editors', 'series'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'size' => 'required|string|max:100',

            'editor_id'  => 'required|exists:editors,id',
            'series_id'  => 'required|exists:series,id',

            'images'    => 'nullable|array',
            'images.*'  => 'image|max:2048',
        ]);

        $figure = Figure::create($data);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $extension = $file->extension();
                $filename = Str::random(16) .'.'. $extension;

                $file->storeAs(
                    "figures/{$figure->id}",
                    $filename,
                    'public'
                );

                $figure->images()->create([
                    'image_path' => $filename,
                ]);
            }
        }

        return redirect()->route('figures.index')->with('success', 'Figurine créée !');
    }

    /**
     * Display the specified resource.
     */
    public function show(Figure $figure)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Figure $figure)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Figure $figure)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Figure $figure)
    {
        //
    }
}
