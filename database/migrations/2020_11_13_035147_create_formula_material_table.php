<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulaMaterialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formula_material', function (Blueprint $table) {
            $table->id();
            $table->foreignId('formula_id');
            $table->foreignId('material_id');
            $table->float('value');
            // $table->timestamps();
        });

        Schema::table('formula_material', function (Blueprint $table) {
            $table->foreign('formula_id')
                ->references('id')
                ->on('formulas')
                ->onDelete('cascade');
            $table->foreign('material_id')
                ->references('id')
                ->on('materials')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('formula_material');
    }
}
