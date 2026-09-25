import { createContext, useState } from "react"
import { changeLocalStorage, getAllLocalStorage, IUser } from "../services/storage"

interface IAppContext {
    user: IUser | null,
    isLoggedIn: boolean,
    signIn: (user: IUser) => void,
    signOut: () => void
}

export const AppContext = createContext({} as IAppContext)

// Lê o localStorage uma única vez, na criação do contexto, para já iniciar
// o estado (isLoggedIn/user) com os dados salvos de uma sessão anterior.
const storage = getAllLocalStorage()
const storedData = storage ? JSON.parse(storage) : null

export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(storedData?.login ?? false)
    const [ user, setUser ] = useState<IUser | null>(storedData?.user ?? null)

    // Salva o usuário logado no localStorage (sem a senha) e atualiza o contexto
    const signIn = (loggedUser: IUser) => {
        setUser(loggedUser)
        setIsLoggedIn(true)
        changeLocalStorage({ login: true, user: loggedUser })
    }

    // Limpa o contexto e o localStorage
    const signOut = () => {
        setUser(null)
        setIsLoggedIn(false)
        changeLocalStorage({ login: false })
    }

    return (
        <AppContext.Provider value={{ user, isLoggedIn, signIn, signOut }}>
            { children }
        </AppContext.Provider>
    )
}
