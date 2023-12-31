import { create } from 'zustand'

const useUserStore = create((set) => ({

  name: '',
  email: '',
  photo: '',
  isLogged: false,

  login: (user) => set(({ 
    name: user.nome,
    email: user.email,
    photo: user.photo,
    isLogged: true,

})),

  logout: () => set({ 
    name: '',
    email: '',
    photo: '',
    isLogged: false, 

  }),
}))

export default userUserStore
