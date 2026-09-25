import { api } from "../api"

export const login = async (email: string, password: string): Promise<boolean> => {
    // Campos vazios nunca são válidos, mesmo que por acaso coincidam com os dados da API
    if(!email || !password) {
        return false
    }

    const data: any = await api

    if(email !== data.email || password !== data.password) {
        return false
    }

    return true
}
