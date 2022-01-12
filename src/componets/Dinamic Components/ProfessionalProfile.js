import React from 'react'
import { Box, Image, Text, Flex, Center, Divider, Button } from '@chakra-ui/react';
import { EmailIcon, InfoIcon, TimeIcon, PhoneIcon, CalendarIcon } from '@chakra-ui/icons';

const ProfessionalProfile = ({data}) => {

    return (
        <Box>
            <Flex 
                flexDirection='column'>
                <Box
                    mt='100px'>
                    <Flex 
                    flexDirection='row'
                    justifyContent='center'>
                            <Box>
                                <Image 
                                    src={data.img} 
                                    alt={data.alt}
                                    boxSize='360px'
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
                                <Flex flexDirection='column'>
                                    <Text 
                                        fontSize='5xl'>
                                        {data.name} {data.lastname}
                                    </Text>
                                    <Text
                                        fontSize='2xl'
                                        as='i'
                                        color='blackAlpha.500'>
                                            <TimeIcon 
                                                mr='2%'
                                                mb='1%'/>
                                                {data.experience} años de experiencia
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
                                    <Text
                                        fontSize='2xl'
                                        as='i'>
                                        <InfoIcon
                                            mr='2%'
                                            b='1%'/>   
                                            {data.text}
                                    </Text>
                                    <Button
                                    mt='5%'>
                                    <CalendarIcon 
                                        mr='2%'
                                        mb='1%'/> Reservar
                                </Button>
                                </Flex>
                            </Box>
                        </Center>
                    </Flex>
                </Box>
            <Divider 
                pt='5%'
                w='85%'
                alignSelf='center'/>
            </Flex>
        </Box>
    )
}

export default ProfessionalProfile;
