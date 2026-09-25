import { Box, Button, Center, Text } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { Card } from "../components/Card"

const ContaInfo = () => {
    const { isLoggedIn, user, signOut } = useContext(AppContext)
    const navigate = useNavigate()

    // Rota protegida: sem usuário logado, volta para a tela de login
    useEffect(() => {
        if(!isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn, navigate])

    const logout = () => {
        signOut()
        navigate('/')
    }

    if(!isLoggedIn || !user) {
        return null
    }

    return (
        <Box padding="25px">
            <Card>
                <Text fontSize='3xl' fontWeight='bold'>
                    Informações da conta
                </Text>
                <Text fontSize='xl'>
                    Nome: {user.name}
                </Text>
                <Text fontSize='xl'>
                    E-mail: {user.email}
                </Text>
                <Center marginTop="15px">
                    <Button marginRight="10px" onClick={() => navigate('/conta/1')}>
                        Voltar para a conta
                    </Button>
                    <Button colorScheme="red" onClick={logout}>
                        Sair
                    </Button>
                </Center>
            </Card>
        </Box>
    )
}

export default ContaInfo
