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
        Schema::create('figure_statuses', function (Blueprint $table) {
            $table->tinyIncrements('id');
            $table->string('label', 50)->unique();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('figure_statuses');
    }
};
