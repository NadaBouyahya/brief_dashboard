<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students_briefs', function (Blueprint $table) {
            $table->unsignedBigInteger('brief_id');
            $table->unsignedBigInteger('student_id');

            $table->primary(['brief_id', 'student_id'], 'studentBrief_id');

            $table->foreign('brief_id')->references('id_brief')->on('briefs')
            ->constrained()
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->foreign('student_id')->references('id_student')->on('students')
            ->constrained()
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students_briefs');
    }
};
