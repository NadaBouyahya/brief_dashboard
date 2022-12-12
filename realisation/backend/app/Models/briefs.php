<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class briefs extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $primaryKey = "id_brief";
    public function task(){
        return $this->hasMany(task::class, 'briefTask_id', 'id_brief');
    }

    public function students(){
        return $this->belongsToMany(student::class, 'student_briefs', 'student_id', 'brief_id');
    }
}
