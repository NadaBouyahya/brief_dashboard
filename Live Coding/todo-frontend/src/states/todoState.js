import { hookstate, useHookstate } from "@hookstate/core";

const globalState = hookstate("test");

export const useTaskState = ()=>{
    const state = useHookstate(globalState);

    return {
        get: ()=>{
            return state.get();
        },
        set: (data)=>{
            return state.set(data);
        },
        add: (obj)=>{
            return state.set((old)=>[...old, obj]);
        }
    }
}
    