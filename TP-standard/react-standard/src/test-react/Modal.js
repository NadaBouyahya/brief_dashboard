import axios from "axios";
import React, { useEffect, useState } from "react"

export default function Modal(props){

    const [post, setPost] = useState([]);
    useEffect(()=> {
        if(props.show.status === true) {
            axios.get('http://127.0.0.1:8000/api/todos/' + props.show.id)
            .then((response) => {
                console.log(response.data);
                setPost(response.data)
            })
        }
    }, [props.show])
    

    if(props.show.status === false){
        return;
    }

    return (
        <div>
            <h1>edit todo</h1>
            <form>
                <input type="text" defaultValue={post.name}/>
                <button onClick={()=>props.closeModal(false)}>close</button>

            </form>
        </div>
    )
}

