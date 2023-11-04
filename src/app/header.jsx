import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Img1 from '../img/Group 217 (1).png'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {GrShop} from 'react-icons/gr'

function navbar() {
  return (
    <Box as='header'>
        <Box  justifyContent={'space-between'} display={'flex'} as='nav'>
            <Box>
            <Image width={'100%'} src={Img1}/>
            </Box>
            <Box display={{base:'none',xl:'block'}} mt={'20px'} left={'100px'}>
                <Text>многоканальный телефон:</Text>
                <Text  >(096) 454-45-50</Text>
           
                <Button colorScheme='red'>ОБРАТНЫЙ ЗВОНОК</Button>
                </Box>
                <Box mt={'50px'} display={'flex'}  gap={'10px'}>
                    <Box>
                       <Text fontSize={{base:'20px', xl:'20px'}} ><AiOutlineUser /></Text> 
                      <Text display={{base:'none',xl:'block'}}>Мой кабинет</Text>
                    </Box>
                    <Box >
                      <Text  fontSize={{base:'20px', xl:'20px'}}><AiOutlineHeart/></Text>  
                      <Text display={{base:'none',xl:'block'}}>Избранное </Text>
                    </Box>
                    <Box>
                       <Text fontSize={{base:'20px', xl:'20px'}}><GrShop/></Text> 
                      <Text display={{base:'none',xl:'block'}}>Корзина</Text>
                    </Box>
                </Box>
        </Box>
    </Box>
  )
}

export default navbar