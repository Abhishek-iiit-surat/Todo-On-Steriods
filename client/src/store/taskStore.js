import { create } from "zustand";

export const useTaskStore = create((set)=>{
    return  {
        tasks : [],
        addTask: (task)=>{
           set((state)=>{
            return {tasks: [...state.tasks, task]};
           }) 
        }
    };
})
