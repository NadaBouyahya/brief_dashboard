<?php

namespace App\Http\Controllers;

use App\Models\promotions;
use Illuminate\Http\Request;

class promotionController extends Controller
{
    public function show(){
        $promo_data = promotions::all();
        return response()->json($promo_data);
    }

    public function show_by_id($id){
        $promo_data = promotions::where('id', $id)->first();
        return response()->json($promo_data);
    }

    public function insert_promo(Request $req){
        $promo = new promotions();
        $promo->name = $req->name;
        $promo->save();
        return $promo;
    }

    public function delete_promo($id){
        $targeted_promo = promotions::where('id', $id)->first();
        $targeted_promo->delete();
        return response()->json(null, 204) ;
    }

    public function edit_promo(Request $req, $id){
        $updated_promo = promotions::where('id', $id)->first();
        $updated_promo->name =  $req->name;
        $updated_promo->save();
        return $updated_promo;

    }
}
