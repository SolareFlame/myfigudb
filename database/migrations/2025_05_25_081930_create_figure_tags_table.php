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
        Schema::create('figure_tags', function (Blueprint $table) {
            $table->uuid('figure_id');
            $table->uuid('tag_id');

            $table->primary(['figure_id', 'tag_id']);

            $table->foreign('figure_id')->references('id')->on('figures')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('figure_tags');
    }
};
