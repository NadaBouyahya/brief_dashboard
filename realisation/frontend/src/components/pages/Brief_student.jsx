import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function BriefStudent() {
    let param = useParams();
    const [data, setData] = useState({students:[]});


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/briefs/" + param.id).then((res) => {
            setData(res.data);
            console.log(res.data);
        })
    }, []) 
    

    return (
        <div>
            {data.students.map((item) =>
                <div>
                    <h1>{item.nom}</h1>
                    

                </div>
            )}
        </div>
    )
}