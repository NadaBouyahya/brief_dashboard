import axios from "axios";
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import GrTask from "react-icons";
// import ShowData from "./Show";
export default function Consult() {
    const [Details, setDetails] = useState({task:[]});
    let params = useParams();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/briefs/" + params.id).then((res) => {
            console.log(res);
            setDetails((old)=>{return {...old, ...res.data}});
        })
    }, [])

    return (

        <div>

            <div>
                <h2>{Details.titre}</h2>
                <h3><GrTask />{Details.task.length}</h3>
            </div>

            <p>{Details.brief_description}</p>
            <li>creation date:{Details.creation_date}</li>
            <li>livraison date{Details.livraison_date}</li>

            {/* <h1>test:{params.id}</h1> */}
        </div>
    )
}