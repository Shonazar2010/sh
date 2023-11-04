import {Box, Text} from '@chakra-ui/react'
import React from 'react'

function Text1(){
    return(
        <Box mt={"30px"} display={{base: 'none', xl: 'flex'}} gap={"70px"}>
            <Text>Волосы</Text>
            <Text>h</Text>
            <Text>Тело</Text>
            <Text>Декоративная косметика</Text>
            <Text>Уход для мужчин</Text>
            <Text>Аксессуары</Text>
            <Text>Уход за животными</Text>
            <Text>Бренды</Text>
            <Text>Новинки</Text>
            <Text>Акции</Text>
        </Box>
    )
}

export default Text1