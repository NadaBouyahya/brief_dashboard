import axios from "axios"
import React , { useEffect } from "react"

export default function BriefStudent(props){
    useEffect( () => {
        axios.get("http://127.0.0.1:8000/api/students/").then((res)=> {
            props.setText(res.data);
        console.log(res.data);

        })
    }, [])
}