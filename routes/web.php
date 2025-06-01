<?php

use App\Http\Controllers\EditorController;
use App\Http\Controllers\FigureController;
use App\Http\Controllers\SeriesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/figures/create', [FigureController::class, 'create'])->name('figures.create');
Route::get('/figures', [FigureController::class, 'index'])->name('figures.index');
Route::post('/figures', [FigureController::class, 'store'])->name('figures.store');

Route::post('/editors', [EditorController::class, 'create'])->name('editors.create');
Route::post('/series', [SeriesController::class, 'create'])->name('series.create');
