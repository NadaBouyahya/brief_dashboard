<?php

namespace App\Http\Controllers;

use App\Models\students;
use Illuminate\Http\Request;

class studentController extends Controller
{
    public function show(){
        $student_data = students::all();
        return response()->json($student_data);
    }

    public function show_by_id($id){
        $student_data = students::where('id_student', $id)->first();
        return response()->json($student_data);
    }

    public function insert_student(Request $req){
        $student = new students();
        $student->nom = $req->fname;
        $student->prénom = $req->lname;
        $student->email = $req->email;
        $student->promo_id = $req->promo_id;

        $student->save();
        return $student;
    }

    public function delete_student($id){
        $targeted_promo = students::where('id_student', $id)->first();
        $targeted_promo->delete();
        return response()->json(null, 204) ;
    }

    public function edit_student(Request $req, $id){
        $updated_student = students::where('id_student', $id)->first();
        $updated_student->nom = $req->fname;
        $updated_student->prénom = $req->lname;
        $updated_student->email = $req->email;
        $updated_student->promo_id = $req->promo_id; 

        $updated_student->save();
        return $updated_student;

    }
}
