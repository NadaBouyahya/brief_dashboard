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
        $promo_data = tasks::where('id_task', $id)->first();
        return response()->json($promo_data);
    }

    public function insert_promo(Request $req){
        $promo = new tasks();
        $promo->name = $req->name;
        $promo->save();
        return $promo;
    }

    public function delete_promo($id){
        $targeted_promo = tasks::where('id', $id)->first();
        $targeted_promo->delete();
        return response()->json(null, 204) ;
    }

    public function edit_promo(Request $req, $id){
        $updated_promo = tasks::where('id', $id)->first();
        $updated_promo->name =  $req->name;
        $updated_promo->save();
        return $updated_promo;

    }
}
