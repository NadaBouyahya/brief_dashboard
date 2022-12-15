import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowTasks(){
    const [taskData, setTask] = useState({task:[]});
    let params = useParams();

    useEffect( () => {
        axios.get("http://127.0.0.1:8000/api/briefs/" + params.id).then( (response) => {
            // console.log(response);
            // console.log(response.data.task);
            setTask(response.data);
        })
    }, [])


    return(
        <div className="brief_container">
        {taskData.task.map((item) =>
            <div className="brief_info">
                <span> <strong>Nom de tache :</strong> {item.titre}</span>
                <span> <strong> date de debut : </strong> {item.task_date_debut}</span>
                <span> <strong> date de fin: </strong> {item.task_date_fin}</span>
            </div>

        )}
    </div>
    )
}