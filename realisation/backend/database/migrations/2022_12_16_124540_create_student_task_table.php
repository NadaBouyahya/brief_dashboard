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
        Schema::create('student_task', function (Blueprint $table) {
            $table->unsignedBigInteger("student_id");
            $table->unsignedBigInteger("task_id");

            $table->primary(['student_id', 'task_id'], 'studentTask_id');

            $table->foreign('student_id')->references('id_student')->on('students')
            ->constrained()
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->foreign('task_id')->references('id_task')->on('tasks')
            ->constrained()
            ->onDelete('cascade')
            ->onUpdate('cascade');
            
            $table->integer("status");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_task');
    }
};
