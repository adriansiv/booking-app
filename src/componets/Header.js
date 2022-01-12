import React from 'react';
import { Box, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button, Image,Text, Flex, IconButton } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import UserData from '../Data/UserData';
import ProfessionalData from '../Data/ProfessionalData';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';


const Header = ( props ) => {
    return (
        <Box
            w='100%'
            p='1%'
            bg={props.isDark? 'blue.800' : 'blue.500' }>
            <Flex
                flexDirection='row'
                justifyContent='space-between'>
                <Menu>
                    <MenuButton 
                        as={Button} 
                        rightIcon={<ChevronDownIcon />}
                        bgColor={props.isDark ? 'blackAlpha.900' : 'blackAlpha.200'}>
                        Perfiles
                    </MenuButton>
                    <MenuList>
                    <Text ml='5%'>Usuarios</Text>
                    {UserData.map((item, index) => {
                        return (
                            <Link key={index} to={item.path}>
                                <MenuItem  key={index} minH='48px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src={item.img}
                                    alt={item.alt}
                                    mr='12px'/>
                                    <span>{item.name} {item.lastname}</span>
                                </MenuItem>
                            </Link>
                        )
                    })}
                        <MenuDivider />
                        <Text ml='5%'>Profesionales</Text>
                        {ProfessionalData.map((item, index) => {
                        return (
                            <Link key={index} to={item.path}>
                                <MenuItem minH='48px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src={item.img}
                                    alt={item.alt}
                                    mr='12px'/>
                                    <span>{item.name} {item.lastname}</span>
                                </MenuItem>
                            </Link>
                        )
                    })}
                    </MenuList>
                </Menu>
                <IconButton icon={props.isDark ? <SunIcon /> : <MoonIcon/>} isRound='true' onClick={props.toggleColorMode}></IconButton>
            </Flex>
        </Box>
    )
}

export default Header;
