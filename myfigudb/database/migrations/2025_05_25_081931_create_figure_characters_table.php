<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('figure_characters', function (Blueprint $table) {
            $table->uuid('figure_id');
            $table->uuid('character_id');
            $table->primary(['figure_id', 'character_id']);

            $table->foreign('figure_id')->references('id')->on('figures')->onDelete('cascade');
            $table->foreign('character_id')->references('id')->on('characters')->onDelete('cascade');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('figure_characters');
    }
};
