<?php

namespace Database\Factories;

use App\Models\Editor;
use App\Models\Figure;
use App\Models\Series;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Figure>
 */
class FigureFactory extends Factory
{
    protected $model = Figure::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id'         => Str::uuid()->toString(),
            'name'       => $this->faker->randomElement(['Mai Figure', 'Marin Figure', 'Lena Figure']),
            'size'       => '1/7',
            'editor_id'  => Editor::factory(),
            'series_id'  => Series::factory(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
