import React, { useState } from 'react'
import axios from 'axios'
import { FormControl, Input, Button, Stack, Textarea, Box, Text, useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
const AddForm = () => {
    const inputState = {
        nama_aplikasi: '',
        pendiri: '',
        jumlah_pengguna: null,
        tanggal_didirikan: null,
        keterangan: ''
    }
    const [ input, setInput ] = useState(inputState)
    const toast = useToast()
    const history = useHistory()
    async function addApplication() {
        try {
            let flag = true
            for (const key in input) {
                if(!input[key]) flag = false
            }
            if(flag) {
                await axios.post('http://localhost:4000/aplikasi', input)
                history.push('/')
                toast({
                    title: `Add Application Success`,
                    variant: 'left-accent',
                    isClosable: true,
                    status:'success'
                  })
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
            <Box d='flex' flexDirection='column' justifyContent='center'>
                <Text mb='4'>Please Fill the Blank Form with Correct Information</Text>
                <Stack direction='row'>
                       <FormControl>
                            <Input 
                            placeholder='Nama Aplikasi'
                            onChange={(e) => setInput({ ...input, nama_aplikasi: e.target.value })}
                            />
                        </FormControl>
                        <FormControl>
                            <Input 
                            placeholder='Pendiri'
                            onChange={(e) => setInput({ ...input, pendiri: e.target.value })}
                            />
                        </FormControl>  
                </Stack>
                <Stack direction='row' mt='4'>
                       <FormControl>
                            <Input
                            type='number'
                            placeholder='Jumlah Pengguna'
                            onChange={(e) => setInput({ ...input, jumlah_pengguna: e.target.value })}
                            />
                        </FormControl>
                        <FormControl>
                            <Input 
                            type='date' 
                            placeholder='Tanggal diririkan'
                            onChange={(e) => setInput({ ...input, tanggal_didirikan: e.target.value })}
                            />
                        </FormControl>  
                </Stack>
                <FormControl mt='4'>
                    <Textarea  placeholder='keterangan'
                    onChange={(e) => setInput({ ...input, keterangan: e.target.value })}/>
                </FormControl>
                <Button
                bg="teal.100"
                mt='2'
                color="teal.500"
                _hover={{ opacity:.7 }}
                onClick={addApplication}
                >Add</Button>  
            </Box>
        )
    
}

export default AddForm
