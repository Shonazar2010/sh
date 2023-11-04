import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

function Products() {
    const [state, setState] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((resource)=>resource.json())
        .then((result)=> setState(result))
    }, [])
  return (
    <div>
        <Box>
            <Flex justify={'center'} my={"50px"}>
                <Text size={60} >НОВИНКИ / Все новинки </Text>
            </Flex>
            <Box>
            <Grid gridTemplateColumns={{
            base: "1 auto, 2 auto, 3 auto",
            sm: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          }}>
                {
                    state.slice(0,4).map((card) =>(
                        <GridItem key={card.id} display={"flex"} flexDirection={"column"} margin={'7px'} gap={"10px"} width={"330px"}>
                            <Image src={card.url}/>
                            <Text size={'sm'}>Маска тканевая для омоложения кожи с комплексом аминокислот и пептидов Mediheal P:EP Firming Proatin Mask 25ml</Text>
                            <Flex justify={"space-between"} />
                        </GridItem>
                    ))
                }
                
            </Grid>
            </Box>
        </Box>


        <Box>
            <Flex justify={'center'} my={"50px"}>
                <Text size={60}>ХИТЫ ПРОДАЖ</Text>
            </Flex>
            <Grid gridTemplateColumns={{
            base: "1 auto, 2 auto, 3 auto",
            sm: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          }}>
            {
                state.slice(0,4).map((card) =>(
                    <GridItem key={card.id} display={"flex"} flexDirection={"column"} margin={'7px'} gap={"10px"} width={"330px"}>
                        <Image src={card.url}/>
                        <Text size={'sm'}>Маска тканевая для омоложения кожи с комплексом аминокислот и пептидов Mediheal P:EP Firming Proatin Mask 25ml</Text>
                        <Flex justify={"space-between"} />
                    </GridItem>
                ))
            }
            </Grid>
        </Box>
        <Box>
            <Flex justify={'center'} my={"50px"}>
                <Text size={60} >ЛУЧШИЕ ЦЕНЫ</Text>
            </Flex>
            <Box>
            <Grid gridTemplateColumns={{
            base: "1 auto, 2 auto, 3 auto",
            sm: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          }}>
                {
                    state.slice(0,4).map((card) =>(
                        <GridItem key={card.id} display={"flex"} flexDirection={"column"} margin={'7px'} gap={"10px"} width={"330px"}>
                            <Image src={card.url}/>
                            <Text size={'sm'}>Маска тканевая для омоложения кожи с комплексом аминокислот и пептидов Mediheal P:EP Firming Proatin Mask 25ml</Text>
                            <Flex justify={"space-between"} />
                        </GridItem>
                    ))
                }
                
            </Grid>
            </Box>
        </Box>


        <Box>
            <Flex justify={'center'} my={"50px"}>
                <Text size={60}>ОТЗЫВЫ НАШИХ ПОКУПАТЕЛЕЙ</Text>
            </Flex>
            <Grid gridTemplateColumns={{
            base: "1 auto, 2 auto, 3 auto",
            sm: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          }}>
            {
                state.slice(0,4).map((card) =>(
                    <GridItem key={card.id} display={"flex"} flexDirection={"column"} margin={'7px'} gap={"10px"} width={"330px"}>
                        <Image src={card.url}/>
                        <Text size={'sm'}>Маска тканевая для омоложения кожи с комплексом аминокислот и пептидов Mediheal P:EP Firming Proatin Mask 25ml</Text>
                        <Flex justify={"space-between"} />
                    </GridItem>
                ))
            }
            </Grid>
        </Box>
    </div>

  );
  
}
export default Products;
