<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class briefs extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $primaryKey = "id_brief";
    public function task()
    {
        return $this->hasMany(tasks::class, 'id_task', 'id_brief');
    }

    public function students()
    {
        return $this->belongsToMany(student::class, 'students_briefs', 'brief_id', 'student_id');
    }
}
