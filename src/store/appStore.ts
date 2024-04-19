import { create } from 'zustand';

const useAppStore = create(set => ({
  name: 'Baby Care Admin',
  isLoggedIn: false,
  user: null,


  token: null,
  setToken: (token: string) => set(() => ({ token })),
  setCount: () => set((state: any) => ({ count: state.count + 1 })),
}))



export default useAppStore;