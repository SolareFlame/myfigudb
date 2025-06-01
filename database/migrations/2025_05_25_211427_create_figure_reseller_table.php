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
        Schema::create('figure_reseller', function (Blueprint $table) {
            $table->uuid('figure_id')->constrained('figures');
            $table->uuid('reseller_id')->constrained('resellers');
            $table->primary(['reseller_id', 'figure_id']);

            $table->decimal('price', 10, 2)->nullable();
            $table->string('url')->nullable();
            $table->string('ref')->nullable();

            $table->tinyInteger('status_id')->constrained('statuses');

            $table->timestamps();
            $table->date('available_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('figure_reseller');
    }
};
