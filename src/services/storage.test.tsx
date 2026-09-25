import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve salvar o usuário logado (nome e e-mail) no localStorage, sem a senha', () => {
        const user = { name: 'Nathaly Souza', email: 'nath@dio.bank' }
        changeLocalStorage({ login: true, user })

        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify({ login: true, user }))
    })

    it('Deve limpar os dados do usuário no localStorage ao deslogar', () => {
        changeLocalStorage({ login: false })

        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify({ login: false }))
    })
})