import { create } from "zustand";

export const uiStore = create((set) => {
    return {
        sidebarOpen: true,
        darkmode: false,
        toggleDarkmode: () => set((state) => ({
            darkmode: !state.darkmode,
        })),
        toggleSidebar: () => {
            set((state) => {
                return { sidebarOpen: !state.sidebarOpen };
            })
        },
        themeColor:"#9933ff",
        themeHoverColor:"#8000ff",

    };
})
