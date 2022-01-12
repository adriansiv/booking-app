import React, { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { Box,   
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, 
    Button,
    FormControl,
    FormLabel,
    Select,
     } from '@chakra-ui/react';
import ProfessionalData from '../../Data/ProfessionalData';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '../../useLocalStorage';

const times = [
    18,
    20,
    22,
];

const initialState = [
    {
        id: '',
        userName: '',
        professional: '',
        date: "", 
        hour: '',
    },
];



registerLocale('es', es);

const UserModal = ({isOpen, onClose, data}) => {

    const [date, setDate] = useLocalStorage('dates', initialState);

    const handlerInput = (e) => {
        setDate({
            ...date,
            [e.target.id] : e.target.value
        });
    };

    const handlerSubmit = (e) => {
            e.preventDefault();
            date.userName =  data.name;
            date.id = nanoid();
            date.date = startDate.toLocaleDateString();
            setDate(date);
            setDate(initialState);
    };

    const [startDate, setStartDate] = useState(new Date());

    return (
        <Box>
             <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Reserva tu cita</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <form onSubmit={handlerSubmit}>
                    <FormControl >
                        <FormLabel htmlFor='professionals'>Seleciona uno de nuestros profesionales</FormLabel>
                            <Select id='professional'     placeholder='Seleciona un profesional'
                            isRequired
                            onChange={handlerInput}>
                            {ProfessionalData.map((item, index) => {
                                return (
                                    <option key={index}>{item.name} {item.lastname}</option>
                                )
                            })}
                            </Select>
                            <FormLabel mt='20px' htmlFor='date'>Selecciona un día.</FormLabel>
                            <Box 
                                ml='25%'
                                mt='20px'
                                mb='20px'
                                w='50%'
                                border='1px'
                                borderRadius='5px'
                                borderColor='blackAlpha.200'
                                p='1%'>
                                <DatePicker 
                                        selected={startDate}
                                        id='date'
                                        locale="es"
                                        dateFormat="dd'/'MMMM'/'yyyy"
                                        onChange={(date) => setStartDate(date)}/>
                            </Box>
                            <FormLabel htmlFor='hour'>Seleciona la hora que mejor te viene</FormLabel>
                            <Select id='hour'     
                            placeholder='Seleciona una hora'
                            isRequired
                            onChange={handlerInput}>
                            {times.map((item, index) => {
                                return (
                                    <option key={index}>{item}h</option>
                                )
                            })}
                            </Select>
                            <Box 
                                w='50%'
                                ml='25%'
                                mt='20px'
                                mb='20px'>
                                <Button variant='ghost' mr={3} onClick={onClose}>Cerrar</Button>
                                <Button 
                                    colorScheme='blue'
                                    type='submit'
                                    onClick={onClose}>Aceptar</Button>
                            </Box>
                        </FormControl>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default UserModal;
