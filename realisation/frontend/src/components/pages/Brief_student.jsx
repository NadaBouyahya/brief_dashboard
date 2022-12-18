import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function BriefStudent() {
    let param = useParams();
    const [data, setData] = useState({ students: [] });


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/briefs/" + param.id).then((res) => {
            setData(res.data);
            console.log(res.data);

        })
    }, [])




    return (
        <div>
            {data.students.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.nom}</h1>

                        <div>
                            Etat d'avancement d'apprenant :
                            <div style={{
                                     width: "200px",
                                     height: "30px",
                                     backgroundColor: "gray"
                                }}>
                             <div style={{ width: (item.tasks.filter((task) => task.pivot.status_task == 1).length / item.tasks.length) * 100 + "%", height: "30px", backgroundColor: "green" }}> {(item.tasks.filter((task) => task.pivot.status_task == 1).length / item.tasks.length) * 100}%</div>
                            </div>
                        </div>
                    </div>
                )
            }

            )}
        </div>
    )
}