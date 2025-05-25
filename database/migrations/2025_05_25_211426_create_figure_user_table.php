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
        Schema::create('figure_user', function (Blueprint $table) {
            $table->uuid('figure_id')->constrained('figures')->onDelete('cascade');
            $table->uuid('user_id')->constrained('users')->onDelete('cascade');
            $table->primary(['user_id', 'figure_id']);

            $table->text('comment')->nullable();
            $table->boolean('wishlist')->default(false);

            $table->timestamps();
            $table->date('buy_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('figure_user');
    }
};
