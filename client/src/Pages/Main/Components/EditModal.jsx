import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    Stack,
    Textarea,
    Box,
    Text,
    useToast
  } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'
const EditModal = ({ isOpen, onClose, data, fetchApplications }) => {
    const [ input, setInput ] = useState(data)
    const toast = useToast()
    const history = useHistory()
    useEffect(() => {
        setInput(data)
    },[data])

    async function editApp() {
        try {
            let flag = true
            for (const key in input) {
                if(!input[key]) flag = false
            }
            if(flag) {
                await axios.put('http://localhost:4000/aplikasi/' + data.id, input)
                fetchApplications()
                toast({
                    title: `Edit Application Success`,
                    variant: 'left-accent',
                    isClosable: true,
                    status:'success'
                  })
                  onClose()
                  history.push('/')
            } else {
                toast({
                    title: `Please Fill the Blank Form`,
                    variant: 'left-accent',
                    isClosable: true,
                    status:'warning'
                  })
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box d='flex' flexDirection='column' justifyContent='center' pb={8}>
                <Stack direction='row'>
                       <FormControl>
                            <Input 
                            placeholder='Nama Aplikasi'
                            value={input.nama_aplikasi}
                            onChange={(e) => setInput({ ...input, nama_aplikasi: e.target.value })}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                            placeholder='Pendiri'
                            value={input.pendiri}
                            onChange={(e) => setInput({ ...input, pendiri: e.target.value })}
                            />
                        </FormControl>  
                </Stack>
                <Stack direction='row' mt='4'>
                       <FormControl>
                            <Input
                            type='number'
                            placeholder='Jumlah Pengguna'
                            value={input.jumlah_pengguna}
                            onChange={(e) => setInput({ ...input, jumlah_pengguna: e.target.value })}
                            />
                        </FormControl>
                        <FormControl>
                            <Input 
                            type='date' 
                            placeholder='Tanggal diririkan'
                            value={input.tanggal_didirikan}
                            onChange={(e) => setInput({ ...input, tanggal_didirikan: e.target.value })}
                            />
                        </FormControl>  
                </Stack>
                <FormControl mt='4'>
                    <Textarea  placeholder='keterangan'
                    value={input.keterangan}
                    onChange={(e) => setInput({ ...input, keterangan: e.target.value })}/>
                </FormControl>
                <Button
                bg="teal.100"
                mt='2'
                color="teal.500"
                _hover={{ opacity:.7 }}
                onClick={editApp}
                >Save</Button>  
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}

export default EditModal
