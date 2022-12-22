import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {AiFillHome} from "react-icons/ai";

import {BsFillBriefcaseFill} from "react-icons/bs"



export default function ShowData(props) {
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/briefs/").then((res) => {
            props.setText(res.data);
            // console.log(res)
        })
    }, [])


    return (
        <div className="main_content flex row">

            <div className="vertical-menu w-1/6">
                <a className="block p-3 hover:text-amber-400" href="#"><span><AiFillHome/>Home</span> </a>
                <a className="block p-3 hover:text-amber-400" href="#">Promotion</a>
                <a className="block p-3 hover:text-amber-400" href="#">Apprenants</a>
                <a className="block p-3 hover:text-amber-400" href="#"><span> <BsFillBriefcaseFill/>Briefs</span></a>

            </div>

            <div className="flex w-9/12 bg-slate-100 p-12 ">
                <div className="brief_container flex bg-white">
                    {props.text.map((item) =>
                        <div className="brief_info flex ml-6 flex-col items-center items-center">
                            <h3 className="mb-3">{item.titre}:</h3>
                            <p className="mb-5">{item.brief_description}</p>

                            <div className="flex">
                                <Link className="mr-6 bg-zinc-900 text-white p-2 rounded-lg" to={"Brief_details/" + item.id_brief}>Plus details</Link>
                                <Link className="mr-6 text-black border border-black border-solid  rounded-lg p-2" to={"/briefs/" + item.id_brief + "/tasks"}>Taches</Link>
                            </div>

                        </div>

                    )}
                </div>
            </div>


        </div>

        // <>
        //     <ul>
        //         {props.text.map((item) => 
        //         <li key={item.id}> 
        //             {item.titre}
        //             <input type="button" value="delete" id-row={item.id} />
        //         </li>)}
        //     </ul>
        // </>
    );
}