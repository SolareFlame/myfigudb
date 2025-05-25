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
        Schema::create('figures', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('size')->nullable();

            $table->uuid('editor_id')->constrained('editors');
            $table->uuid('series_id')->constrained('series');

            // > figure_resseler
            // > figure_character
            // > figure_user (collection)

            /*

            $table->decimal('price',10,2)->nullable(); LIKED TO FIGURE_RESSELLER
            $table->boolean('is_bought')->default(false); LIKED TO FIGURE_USER
            $table->tinyInteger('status_id')->constrained('figure_statuses'); LIKED TO FIGURE_RESSELLER
            $table->uuid('reseller_id')->constrained('resellers'); LIKED TO FIGURE_RESSELLER
            $table->uuid('license_id')->constrained('licenses'); LIKED TO CHARACTER

            */

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('figures');
    }



};
