import axios from "axios";
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"

// import ShowData from "./Show";
export default function Consult(){
    const [Details, setDetails] = useState([]);
    let params = useParams();

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/briefs/"+params.id).then((res)=> {
        setDetails(res.data)
    })
    }, [])
    // console.log(id);

    return (
        
        <div>
            {/* <h1>test:{params.id}</h1> */}
        </div>
    )
}