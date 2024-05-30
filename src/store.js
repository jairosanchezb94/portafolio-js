import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      (set) => ({
        isDarkMode: false,
        toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      }),
      { name: 'theme-store' }
    )
  )
);

export default useStore;
