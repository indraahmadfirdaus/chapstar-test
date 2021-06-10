import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dateFormat from 'dateformat'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Stack,
    Text,
    useToast,
    useDisclosure
} from '@chakra-ui/react'
import { DeleteIcon, InfoOutlineIcon, EditIcon } from '@chakra-ui/icons'
import EditModal from './EditModal'

const TableData = ({ setDocsData }) => {
    const [appData, setAppData] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const [toEditApp, setToEditApp] = useState(null)
    const { 
        isOpen : isOpenEditModal,
        onClose : onCloseEditModal,
        onOpen : onOpenEditModal
    } = useDisclosure()
    const toast = useToast()
    async function fetchApplications() {
        try {
            setIsloading(true)
            const { data } = await axios.get('http://localhost:4000/aplikasi')
            setIsloading(false)
            setAppData(data)
            setDocsData(data)
        } catch (error) {
            console.log(error.response)
        }
    }

    async function deleteApplication(id) {
        try {
            await axios.delete('http://localhost:4000/aplikasi/' + id)
            toast({
                title: `Delete Application Success`,
                variant: 'left-accent',
                isClosable: true,
                status:'success'
              })
              fetchApplications()
        } catch (error) {
            console.log(error.response)
        }
    }

    async function handleEdit(data) {
        setToEditApp(data)
        onOpenEditModal()
    }

    useEffect(() => {
        fetchApplications()
    },[])

    if(isLoading) {
        return (
            <Text>Loading...</Text>
        )
    }

    return (
        <>
        <Table variant="simple">
            <Thead >
                <Tr>
                <Th>Nama Aplikasi</Th>
                <Th>Keterangan</Th>
                <Th isNumeric>Jumlah Pengguna</Th>
                <Th >Pendiri</Th>
                <Th >Tanggal Didirikan</Th>
                <Th >Aksi</Th>
                </Tr>
            </Thead>
            <Tbody>
                {appData?.map(eachApp => (
                    <Tr>
                    <Td>{eachApp.nama_aplikasi}</Td>
                    <Td>{eachApp.keterangan}</Td>
                    <Td >{eachApp.jumlah_pengguna}</Td>
                    <Td >{eachApp.pendiri}</Td>
                    <Td >{dateFormat(eachApp.tanggal_didirikan, 'fullDate')}</Td>
                    <Td>
                        <Stack direction='row'>
                            <IconButton
                            variant='ghost'
                            colorScheme='yellow'
                            icon={<EditIcon/>}
                            size='sm'
                            onClick={() => handleEdit(eachApp)}
                            />
                            <IconButton
                            variant='ghost'
                            icon={<DeleteIcon/>}
                            size='sm'
                            onClick={() => deleteApplication(eachApp.id)}
                            />
                        </Stack >
                    </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
        { toEditApp && <EditModal
        isOpen={isOpenEditModal}
        onClose={onCloseEditModal}
        data={toEditApp}
        fetchApplications={fetchApplications}
        /> }
        </>
    )
}

export default TableData
