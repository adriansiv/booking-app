import React, { useState } from 'react';
import { 
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';


    const listOfDates = [
        {
            id: '12345',
            userName: 'Gabriel',
            professional: 'Albert',
            date: "12/07/2022", 
            hour: '18h',
        },
        {   
            id: '67890',
            userName: 'Gabriel',
            professional: 'María',
            date: "15/09/2022", 
            hour: '22h',
        },
        {
            id: '13680',
            userName: 'Gabriel',
            professional: 'Lucía',
            date: "12/09/2022", 
            hour: '22h',
        }
    ];
const UserTable = () => {

    const [ dates, setDates ] = useState(listOfDates);


    const deleteDate = (id) => {
        const newListOfDates = dates.filter((date) => {
            return date.id !== id;
        });
        setDates(newListOfDates);
    }

    return (
        <Box
            w='80%'
            mt='5%'
            ml='10%'
            border='1px'
            borderColor='blackAlpha.200'
            borderRadius='15px'>
            <Table 
                variant='simple'
                >
                <TableCaption>Tus Reservas</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Profesional</Th>
                        <Th>Fecha</Th>
                        <Th>Hora</Th>
                        <Th>Cancelar</Th>
                    </Tr>
                </Thead>

                {listOfDates.map((item, index) => {
                    return (
                        <Tbody>
                            <Tr key={index}>
                                <Td>{item.professional}</Td>
                                <Td>{item.date}</Td>
                                <Td>{item.hour}</Td>
                                <Td><IconButton icon={<DeleteIcon />}isRound='true' onClick={() => deleteDate(item.id)}/></Td>
                            </Tr>
                        </Tbody>
                    )})}

            </Table>
        </Box>
    )
}

export default UserTable;
