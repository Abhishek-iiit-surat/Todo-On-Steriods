import { create } from "zustand";

export const uiStore = create((set, get) => {
    return {
        sidebarOpen: false,
        darkmode: false,
        toggleDarkmode: (value) => set({ darkmode: value }),
        toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
        themeColor: "#9933ff",
        themeHoverColor: "#8000ff",

    };
})
