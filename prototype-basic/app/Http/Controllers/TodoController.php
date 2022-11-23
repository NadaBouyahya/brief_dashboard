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

    public function insert_todo(){
        $todo = new todos();
        $todo->save();
        return response()->json(compact('todo'));
    }
}
