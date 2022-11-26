import React from "react"
import axios from "axios"

export default function Test1(props) {


    axios.get("http://127.0.0.1:8000/api/todos/").then((res) => {
        // console.log(res.data);
        props.setText(res.data);
    })

    return (
        <ul>
            {props.text.map((item)=><li key={item.id}>{item.name}</li>)}
        </ul>
    );
}