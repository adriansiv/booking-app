import React from 'react'
import { Box, Image, Text, Flex, Center, Divider, useDisclosure, Button } from '@chakra-ui/react';
import { EmailIcon, AttachmentIcon, TimeIcon, PhoneIcon, CalendarIcon } from '@chakra-ui/icons';
import UserModal from './UserModal';
import UserTable from './UserTable';

const UserProfile = ({data}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box 
            pb='5%'>
        <Flex flexDirection='column'>
            <Box
                mt='100px'>
                <Flex 
                    flexDirection='row'
                    justifyContent='center'>
                    <Box>
                        <Image 
                        src={data.img} 
                        alt={data.alt}
                        boxSize='350px'
                        borderRadius='50px'
                        ml='90px'
                        mt='17px'/>
                    </Box>
                    <Center>
                        <Box
                            mr='150px'
                            p='60px' 
                            bgColor='blackAlpha.50'
                            borderRadius='20px'
                            ml='30px'>
                            <Flex 
                                flexDirection='column'>
                                <Text fontSize='5xl'>
                                    {data.name} {data.lastname}
                                </Text>
                                <Text 
                                    fontSize='2xl'
                                    color='blackAlpha.500'
                                    as='i'>
                                        <TimeIcon 
                                            mr='2%'
                                            mb='1%'/>
                                            {data.age} años
                                </Text>
                                <Text 
                                    fontSize='2xl'>
                                        <AttachmentIcon 
                                            mr='2%'
                                            mb='1%'/>
                                            {data.profession}
                                </Text>     
                                <Text 
                                    fontSize='2xl'>
                                        <EmailIcon 
                                            mr='2%'
                                            mb='1%'/>
                                            {data.email}
                                </Text>
                                <Text 
                                    fontSize='2xl'>
                                        <PhoneIcon 
                                            mr='2%'
                                            mb='1%'/>
                                            {data.phoneNumber}
                                </Text>   
                                <Button 
                                    onClick={onOpen}
                                    mt='5%'>
                                    <CalendarIcon 
                                        mr='2%'
                                        mb='1%'/> Reservar
                                </Button>
                                <UserModal isOpen={isOpen} onClose={onClose} data={data}/>                                 
                            </Flex>
                        </Box>
                    </Center>
                </Flex>
            </Box>
            <Divider 
                pt='5%'
                w='85%'
                alignSelf='center'/>
            <UserTable/>
        </Flex>
    </Box>
    )
}

export default UserProfile;
