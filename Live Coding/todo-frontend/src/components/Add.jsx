import { useHookstate } from "@hookstate/core";
import { useTaskState } from "../states/todoState";


export default function Add(){
    const tasks = useTaskState();
    return(
        <input type="text" onChange={(e)=> tasks.set(e.target.value)}/>
    )
}