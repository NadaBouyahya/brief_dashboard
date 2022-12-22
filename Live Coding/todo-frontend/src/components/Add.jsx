import { useHookstate } from "@hookstate/core";
import { useTaskState } from "../states/todoState";


export default function Add() {
    const tasks = useTaskState();
    return (
        <>
            <form action=""
                onSubmit={ (e)=> {
                    e.preventDefault();
                    tasks.add(e.target["todo"].value);
                    e.target["todo"].value = "";
                }}
            >
                <input type="text" name="todo" />
                <input type="submit" />
            </form>

        </>
    )
}

// onChange={(e)=> tasks.set(e.target.value)}