<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class students extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey = 'id_student';

    public function briefs()
    {
        return $this->belongsToMany(brief::class, 'student_briefs', 'student_id', 'id_brief');
    }

    public function tasks () {
        return $this->belongsToMany(tasks::class, 'student_task', 'student_id', 'task_id');
    }
}
