import { useHookstate } from "@hookstate/core";
import { useTaskState } from "../states/todoState";


export default function Show(){
    const tasks = useTaskState();
    return (

            <ul>
                {tasks.get().map( (todo)=> (
                    <li>{todo}</li>
                ) )}
            </ul>

        // <h1>{tasks.get()}</h1>
    )
}