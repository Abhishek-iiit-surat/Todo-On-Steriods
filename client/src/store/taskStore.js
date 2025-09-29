import { create } from "zustand";

export const useTaskStore = create((set) => {
    return {
        tasks: [
            { title: "Complete the dashboard", date: "2023-10-10", done: false, id: 1 },
            { title: "Write project report", date: "2023-10-12", done: false, id: 2 },
            { title: "Team meeting", date: "2023-10-13", done: false, id: 3 },
            { title: "Code review", date: "2023-10-14", done: false, id: 4 },
            { title: "Update documentation", date: "2023-10-15", done: false, id: 5 },
            { title: "Deploy new version", date: "2023-10-16", done: false, id: 6 }
        ]
        ,
        addTask: (task) => {
            set((state) => {
                return { tasks: [...state.tasks, task] };
            })
        }
    };
})
