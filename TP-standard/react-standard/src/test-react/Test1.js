import React, { useEffect, useState } from "react"
import axios from "axios"
import Modal from "./Modal";

export default function Test1(props) {

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/todos/").then((res) => {
            // console.log(res.data);
            props.setText(res.data);
        })
    }, []);

    function deleteItem(event) {
        var id_row = event.target.getAttribute("id-row");
        axios.delete('http://127.0.0.1:8000/api/todos/' + id_row)
            .then((response) => {
                props.setText(props.text.filter((item) => item.id !== Number(id_row)));
            })
    }

    const [showModal, setModal] = useState(false);

    return (
        <>
            <ul>
                {props.text.map((item) => <li key={item.id}> {item.name}
                    <input onClick={deleteItem} type="button" value="delete" id-row={item.id} />
                    <input type="button" value="Edit" id-row={item.id} onClick={()=>setModal(true)}/> </li>)}
            </ul>
            <Modal show={showModal} />
        </>
    );
}