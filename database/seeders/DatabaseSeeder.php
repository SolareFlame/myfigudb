<?php

namespace Database\Seeders;

use App\Models\Figure;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(StatusesTableSeeder::class);

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@myfigudb.fr',
            'password' => bcrypt('habibiroot'),
        ]);

        Figure::factory()->count(10)->create();
    }
}
