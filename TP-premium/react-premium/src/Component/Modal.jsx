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

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setPost({...post, [name]: value});
    }

    const updateTodo = (event)=>{
        event.preventDefault();
        axios.put('http://127.0.0.1:8000/api/todos/' + props.show.id, post)
        .then((res)=>{
            props.setText(
                props.text.map((item)=>{
                    if(item.id === Number(res.data.id)){
                        return {...item, ...res.data}
                    }
                    else{
                        return item;
                    }
                })
            )
        })
    }



    return (
        <div>
            <h1>edit todo</h1>
            <form onSubmit={updateTodo}>
                <input type="text" name="name" onChange={handleChange} defaultValue={post.name}/>
                <button type="submit" >save</button>
                <button onClick={()=>props.closeModal(false)}>close</button>

            </form>
        </div>
    )
}

