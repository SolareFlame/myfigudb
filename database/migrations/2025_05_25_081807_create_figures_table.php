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
            $table->string('ref')->unique();
            $table->decimal('price',10,2)->nullable();
            $table->boolean('is_bought')->default(false);
            $table->tinyInteger('status_id')->constrained('figure_statuses');
            $table->uuid('website_id')->constrained('websites');
            $table->uuid('editor_id')->constrained('editors');
            $table->uuid('collection_id')->constrained('collections');
            $table->uuid('license_id')->constrained('licenses');
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
