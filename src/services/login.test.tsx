import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockPassword = '123456'

    // Testes de TDD para a validação de e-mail e senha (escritos antes da implementação)
    it('Deve retornar true quando o e-mail e a senha estiverem corretos', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve retornar false quando o e-mail for inválido', async() => {
        const response = await login('email@invalido.com', mockPassword)
        expect(response).toBeFalsy()
    })

    it('Deve retornar false quando a senha for inválida', async() => {
        const response = await login(mockEmail, 'senha-errada')
        expect(response).toBeFalsy()
    })

    it('Deve retornar false quando o e-mail estiver vazio', async() => {
        const response = await login('', mockPassword)
        expect(response).toBeFalsy()
    })

    it('Deve retornar false quando a senha estiver vazia', async() => {
        const response = await login(mockEmail, '')
        expect(response).toBeFalsy()
    })
})