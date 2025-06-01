<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FigureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('figure')->insert([
            ['name' => 'PRECOMMANDE (SANS VISUEL)'],
            ['name' => 'PRECOMMANDE'],
            ['name' => 'DISPONIBLE'],
            ['name' => 'RUPTURE'],
            ['name' => 'NON DISPONIBLE'],
        ]);
    }
}
