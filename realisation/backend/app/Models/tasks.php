<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
 use Illuminate\Database\Eloquent\Model;

class tasks extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $primaryKey = 'id_task';
    protected $table = 'tasks';
    public function brief(){
        return $this->belongsTo(briefs::class, 'brief_id', 'id_brief');
    }

    public function students () {
        return $this->belongsToMany(students::class, 'student_task', 'task_id', 'student_id');
    }
}
