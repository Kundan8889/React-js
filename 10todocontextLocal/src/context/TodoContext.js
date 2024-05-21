import { createContext,useContext, useState } from "react";
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            complete:false
        }
    ],
    addTodo:(todo)=>{},
    addTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const Todoprovider=Todoprovider.provider