import { useEffect, useState } from "react";

export default function Test3(props) {
    const [text, setText] = useState("test");

    return (
        <div>
            {/* <div>{text}</div> */}
            {/* <div>{text}</div> */}
            {/* <div>{text}</div> */}
            <div>{text}</div>
            <input type='text' onChange={function (e) { setText(e.target.value) }} />
        </div>
    );
}