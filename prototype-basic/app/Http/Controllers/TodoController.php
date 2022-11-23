<?php

namespace App\Http\Controllers;

use App\Models\todos;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function show(){
        $todo_data = todos::all();
        return response()->json($todo_data);
    }

    public function show_by_id($id){
        $todo_data = todos::where('id', $id)->first();
        return response()->json($todo_data);
    }

    public function insert_todo(Request $req){
        $todo = new todos();
        $todo->name =  $req->name;
        $todo->save();
        return $todo;
    }

    public function delete_todo($id){
        $targeted_todo = todos::where('id', $id);
        $targeted_todo->delete();
        return $targeted_todo;
    }

    public function edit_todo(Request $req, $id){
        $updated_todo = todos::where('id', $id)->first();
        $updated_todo->name =  $req->name;
        $updated_todo->save();
        return $updated_todo;

    }
}
