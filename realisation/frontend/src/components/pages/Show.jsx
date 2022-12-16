import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";



export default function ShowData(props) {
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/briefs/").then((res) => {
            props.setText(res.data);
            // console.log(res)
        })
    }, [])


    return (
        <div className="brief_container">
            {props.text.map((item) =>
                <div className="brief_info">
                    <h3>{item.titre}:</h3>
                    <p>{item.brief_description}</p>
                    <Link to={"Brief_details/" + item.id_brief}>Plus details</Link>
                    <Link to={"/briefs/" + item.id_brief + "/tasks"}>Taches</Link>
                </div>

            )}
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