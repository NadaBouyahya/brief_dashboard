import { Axios } from "axios"
import { useState } from "react"

export default function PostForm() {

    const [data, setData] = useState({
        name: ""
    })

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);
     }

    function submit(e){
        e.preventDefault()
        Axios.post('http://127.0.0.1:8000/api/todos/', {
            name : data.name
        }).then(res => {
            console.log(res.data)
        })
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
            <input onChange={(e) => handle(e)} value={data.name} type="text" id="name" />
            <input type="submit" value="Save" />
        </form>

    )
}