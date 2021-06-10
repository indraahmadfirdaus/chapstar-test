import React, { useState } from 'react'
import TableData from './Components/TableData'
import AddForm from "./Components/AddForm"
import Docs from './Components/Docs'
import {
    Box,
    Text,
    Flex,
    Stack,
 } from '@chakra-ui/react'
 import { useHistory, useRouteMatch } from 'react-router-dom'
const Main = () => {
    const history = useHistory()
    const [docsData, setDocsData] = useState(null)
    const matchTableApp = useRouteMatch({
        path: '/',
        strict: true,
        sensitive: true,
        exact: true
    })
    const matchAddForm = useRouteMatch({
        path: '/add',
        strict: true,
        sensitive: true
    })
    const matchDocs = useRouteMatch({
        path: '/docs'
    })
    return (
        <Flex minH='100vh' bg='gray.100' justifyContent='center' alignItems='center'>
            <Box w='80%' h='80vh' bg='white' rounded='3xl'>
                <Flex py={4} px={8}>
                    <Text
                    letterSpacing='widest'
                    fontWeight='500'
                    color='gray.500'
                    >Chapstar App List</Text>
                </Flex>
                <Stack direction='row'>
                    <Box  w='40vh' py={4} px={8}>
                        <Stack direction='column'>
                            <Flex
                            py={4}
                            px={8}
                            w='100%'
                            cursor='pointer'
                            transition='200ms'
                            rounded='xl'
                            onClick={() => history.push('/')}
                            _hover={{ backgroundColor: 'teal.100' }}>
                                <Text>
                                    Applications
                                </Text>
                            </Flex>
                            <Flex
                            py={4}
                            px={8}
                            w='100%'
                            cursor='pointer'
                            transition='200ms'
                            rounded='xl'
                            onClick={() => history.push('/add')}
                            _hover={{ backgroundColor: 'teal.100' }}>
                                <Text>Add</Text>
                            </Flex>
                            <Flex
                            py={4}
                            px={8}
                            w='100%'
                            cursor='pointer'
                            transition='200ms'
                            rounded='xl'
                            onClick={() => history.push('/docs')}
                            _hover={{ backgroundColor: 'teal.100' }}>
                                <Text>See in Docs</Text>
                            </Flex>
                        </Stack>
                    </Box>
                    <Box bg='gray.100' rounded='xl' w='73%' h='65vh' py={4} px={8}>
                        <Flex my='2'>
                            <Text>
                            { matchTableApp && 'Applications' }
                            { matchAddForm && 'Add Application Form' }
                            { matchDocs && 'Document Example' }
                            </Text>
                            </Flex>
                        <Stack direction='column'>
                            <Flex
                            w='100%'
                            h='350px'
                            rounded='xl'
                            bg='white'
                            justifyContent='center'
                            textAlign='center'
                            p={4}
                            fontSize={12}
                            overflow='auto'
                            overflowX='hidden'
                            > 
                            { matchTableApp && <TableData setDocsData={setDocsData} /> }
                            { matchAddForm &&<AddForm />}
                            { matchDocs && docsData &&<Docs data={docsData}/>}
                            </Flex>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Flex>
    )
}

export default Main
