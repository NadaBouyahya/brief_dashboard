import { useHookstate } from "@hookstate/core";
import { useTaskState } from "../states/todoState";


export default function Show(){
    const tasks = useTaskState();

    return (
        <h1>{tasks.get()}</h1>
    )
}