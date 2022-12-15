<?php

namespace App\Http\Controllers;

use App\Models\briefs;
use App\Models\students;

use Illuminate\Http\Request;

class briefController extends Controller
{
    public function show(){
        $briefs_data = briefs::all();
        return response()->json($briefs_data);
    }

    public function show_by_id($id){
        $briefs_data = briefs::where('id_brief', $id)->first();
        $briefs_data->task;
        return response()->json($briefs_data);
    }

    public function insert_brief(Request $req){
        $brief = new briefs();
        $brief->titre = $req->titre;
        $brief->creation_date = $req->creation_date;
        $brief->livraison_date = $req->livraison_date;

        $brief->save();
        return $brief;
    }

    public function delete_brief($id){
        $targeted_brief = briefs::where('id_brief', $id)->first();
        $targeted_brief->delete();
        return response()->json(null, 204) ;
    }

    public function edit_brief(Request $req, $id){
        $updated_brief = briefs::where('id', $id)->first();
        $updated_brief->titre = $req->titre;
        $updated_brief->creation_date = $req->creation_date;
        $updated_brief->livraison_date = $req->livraison_date;
        
        $updated_brief->save();
        return $updated_brief;

    }


    public function attachBrief($brief_id, $student_id)
    {
        $student = students::where('id_student', $student_id)->first();
        $student->briefs()->attach($brief_id);
    }

    public function detachBrief($brief_id, $student_id)
    {
        $student = students::where('id_student', $student_id)->first();
        $student->briefs()->detach($brief_id);
    }

    public function assignAll($briefId)
    {
        $student = students::all();
        foreach ($student as $student) {
            $student->briefs()->attach($briefId);
        }
        // return redirect('BriefAssign/' . $briefId);
    }
}
