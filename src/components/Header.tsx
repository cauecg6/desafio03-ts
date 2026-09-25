import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'

export const Header  = () => {
  const { isLoggedIn, signOut } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    signOut()
    navigate('/')
  }

  return(
    <Flex backgroundColor='orange' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              marginRight='10px'
              onClick={() => navigate('/conta/1')}
            >
              Conta
            </Button>
            <Button
              marginRight='10px'
              onClick={() => navigate('/infoconta')}
            >
              Meus dados
            </Button>
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  )
}
