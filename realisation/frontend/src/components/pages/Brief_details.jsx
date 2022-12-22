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
            <div className="flex flex-col mb-6">
                <div className="flex items-center mb-4">
                    <h2>{Details.titre}</h2>
                    <div className="flex items-center ml-10">
                        <span><GrTask /></span>
                        <span className="ml-2">{Details.task.length} Taches</span>
                    </div>
                </div>

                <div>
                    <p>{Details.brief_description}</p>
                    <ul className="mt-4">
                        <li key={Details.id_brief}><strong>Date de creation : </strong>{Details.creation_date}</li>
                        <li key={Details.id_brief}><strong>Date de livraison : </strong>{Details.livraison_date}</li>
                    </ul>
                </div>
            </div>

            <br />

            <div>
                <h1>Etat d'avancement de brief :</h1>
                <div style={{
                    width: "200px",
                    height: "30px",
                    backgroundColor: "gray"
                }}>
                    <div style={{ width: progress + "%", height: "30px", backgroundColor: "green" }}>{progress}%</div>
                </div>
            </div>

            <Link to={"/briefs/" + Details.id_brief + "/tasks"}>Taches</Link>
            <br></br>
            <Link to={"/briefs/" + Details.id_brief + "/students"}>consulter</Link>
        </div>
    )
}