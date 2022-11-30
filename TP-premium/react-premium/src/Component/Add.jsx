import axios from "axios"
import { useState } from "react"

export default function PostForm(props) {

    const [data, setData] = useState({
        name: ""
    })

    function handle(e) {
        const newData = {...data};
        newData[e.target.name] = e.target.value;
        setData(newData);
        // console.log(newData);
     }

    function submit(e){
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/todos/', {
            name : data.name
        }).then(res => {
            console.log(res.data);
            props.setText((previous)=>{return [...previous, res.data]});
        });
    }

    
    //  const change = ()=> {
    //     props.setText((previous)=>{
    //         previous++;
    //         return previous;
    //     })
    // }
    // const change = ()=> {
    //     props.setText("bye world")
    // }
    // function showTest(){
    //     alert('hi')
    // }
    return (
        <form onSubmit = {(e) => submit(e)}>
            <input onChange={(e) => handle(e)} value={data.name} type="text" name="name" />
            <input type="submit" value="Save" />
        </form>

    )
}