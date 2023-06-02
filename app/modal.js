import React from 'react'
import './app.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Box,
  ModalFooter,
  Button,
  ModalBody,
  Input,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie';

const loginModal = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    function handleSubmit(e) {
        e.preventDefault()
        console.log("User:")
        alert("Thank you for Logging in!")
    }
  return (
    <CookiesProvider>
    <div className='modal'>
        
        <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Below</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder='Name'id="username"
            variant={'filled'} type='text' mb={3}/>
            
            <Input placeholder='Email'
            variant={'filled'} type='email' mb={3} />
            <Input placeholder="**********"
                variant={"filled"}
                type='password' mb={7}
                />
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme='blue' mr={3} type='submit'>
              Submit
            </Button>
            <Box
                position={"absolute"}
                top={2}
                right={2}
                cursor={"pointer"}
            >

            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
    </CookiesProvider>
  )
}

export default loginModal;