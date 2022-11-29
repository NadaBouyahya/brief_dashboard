import axios from "axios";
import React, { useEffect, useState } from "react"

export default function Modal(props){

    const [post, setPost] = useState([]);
    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/api/todos/')
        .then((response) => {
            console.log(response.data);
            setPost(response.data)
        })
    }, [])
    

    if(props.show === false){
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

