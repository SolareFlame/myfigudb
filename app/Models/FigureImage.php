<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class FigureImage extends Model
{
    protected $fillable = ['figure_id', 'image_path'];

    public function figure()
    {
        return $this->belongsTo(Figure::class);
    }
}
