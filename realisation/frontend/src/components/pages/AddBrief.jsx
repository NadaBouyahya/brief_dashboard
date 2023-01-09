import axios from "axios";
import { useState } from "react"

export default function AddBrief() {
    const [form, setForm] = useState({});
    
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setForm((old)=>{return {...old, [name]: value}});
    }

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/briefs', form).then(()=>{
            alert("added");
        })
    }

    return (
        <form onSubmit={Submit}>
            <input type="text" name="titre" onChange={handleChange} value={form.titre} />
            <input type="text" name="brief_description" onChange={handleChange} value={form.brief_description} />
            <input type="date" name="creation_date" onChange={handleChange} value={form.creation_date} />
            <input type="date" name="livraison_date" onChange={handleChange} value={form.livraison_date} />

            <input type="submit" name="submit"/>
        </form>
    )
}

// an3adlo markup
// xmn tari9a li n5dmo biha
// 