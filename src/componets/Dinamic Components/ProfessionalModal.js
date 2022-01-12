import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Box,   
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, 
     } from '@chakra-ui/react';


const ProfessionalModal = ({isOpen, onClose, data}) => {

    return (
        <Box>
             <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>¿Que turnos prefieres?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                        <Box>
                            In progress..
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ProfessionalModal;