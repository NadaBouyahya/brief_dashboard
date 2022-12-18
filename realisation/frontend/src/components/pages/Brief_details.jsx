import axios from "axios";
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GrTask } from "react-icons/gr";
import { Link } from "react-router-dom";
// import ShowData from "./Show";
export default function Consult() {
    const [Details, setDetails] = useState({ task: [] });
    const [progress, setProgress] = useState(0);
    let params = useParams();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/briefs/" + params.id).then((res) => {
            console.log(res);
            setDetails((old) => { return { ...old, ...res.data } });
            let completed = 0;
            for (let i = 0; i < res.data.task.length; i++) {
                if (res.data.task[i].status == 1) {
                    completed++;
                }
            }
            setProgress((completed / res.data.task.length) * 100)

        });


    }, [])


    return (

        <div>
            <div>
                <div>
                    <h2>{Details.titre}</h2>
                    <h3><GrTask />{Details.task.length} taches</h3>
                </div>

                <p>{Details.brief_description}</p>
                <li>creation date:{Details.creation_date}</li>
                <li>livraison date{Details.livraison_date}</li>
            </div>
            <br />
            <div>
                Etat d'avancement de brief : 
                <div style={{
                    width: "200px",
                    height: "30px",
                    backgroundColor:"gray"
                }}>
                    <div style={{width:progress+"%", height:"30px", backgroundColor:"green"}}>{progress}%</div>
                </div>
            </div>

            <Link to={"/briefs/" + Details.id_brief + "/tasks"}>Taches</Link>
            <br></br>
            <Link to={"/briefs/" + Details.id_brief + "/students"}>consulter</Link>
        </div>
    )
}