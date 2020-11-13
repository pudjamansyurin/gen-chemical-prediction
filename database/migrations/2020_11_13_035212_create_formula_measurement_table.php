<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulaMeasurementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formula_measurement', function (Blueprint $table) {
            $table->id();
            $table->foreignId('formula_id');
            $table->foreignId('measurement_id');
            $table->float('value');
            // $table->timestamps();
        });

        Schema::table('formula_measurement', function (Blueprint $table) {
            $table->foreign('formula_id')
                ->references('id')
                ->on('formulas')
                ->onDelete('cascade');
            $table->foreign('measurement_id')
                ->references('id')
                ->on('measurements')
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
        Schema::dropIfExists('formula_measurement');
    }
}
