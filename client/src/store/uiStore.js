import { create } from "zustand";

export const uiStore = create((set) => {
    return {
        sidebarOpen: true,
        toggleSidebar: () => {
            set((state) => {
                return { sidebarOpen: !state.sidevarOpen };
            })
        }
    };
})
