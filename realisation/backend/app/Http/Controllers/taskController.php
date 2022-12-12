<?php

namespace App\Http\Controllers;

use App\Models\tasks;
use Illuminate\Http\Request;

class taskController extends Controller
{
    public function show(){
        $promo_data = tasks::all();
        return response()->json($promo_data);
    }

    public function show_by_id($id){
        $task_data = tasks::where('id_task', $id)->first();
        return response()->json($task_data);
    }

    public function insert_task(Request $req){
        $task = new tasks();

        $task->titre = $req->titre;
        $task->description = $req->description;
        $task->task_date_debut = $req->task_date_debut;
        $task->task_date_fin = $req->task_date_fin;
        $task->brief_id = $req->brief_id;


        $task->save();
        return $task;
    }


    public function delete_task($id){
        $targeted_task = tasks::where('id_task', $id)->first();
        $targeted_task->delete();
        return response()->json(null, 204) ;
    }
    

    public function edit_task(Request $req, $id){
        $updated_task = tasks::where('id_task', $id)->first();

        $updated_task->titre = $req->titre;
        $updated_task->description = $req->description;
        $updated_task->task_date_debut = $req->task_date_debut;
        $updated_task->task_date_fin = $req->task_date_fin;
        $updated_task->brief_id = $req->brief_id;

        $updated_task->save();
        return $updated_task;

    }
}
