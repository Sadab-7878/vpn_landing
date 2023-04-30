import { Box, Divider, Text, Stack, Flex, HStack, Image, Center } from "@chakra-ui/react";
import React from "react";
import User from '../assets/user.svg'
import Server from '../assets/server.svg'
import Location from '../assets/location.svg'

const Feature1 = () => {
  return (
    <Box
      rounded={"lg"}
      shadow={"xl"}
      maxW={1200}
      mx="auto"
      height={130}
      p={4}
      my={120}
    >
      <Center>
        <Stack direction='row' h='100px' p={4} border={'gray'} spacing={150}>

        <Box >
          <Flex gap={5} justifyContent='center' alignItems={'center'}>
          <Box>
            <Image src={User}/>
          </Box>
         
          <Box>
            <Text fontSize={'lg'} fontWeight={'bold'}>90+</Text>
            <Text fontSize={'smaller'} color='gray.500' fontStyle={'normal'}>Users</Text>
          </Box>
          </Flex>
        </Box>
       
        <Divider orientation="vertical"/>

        <Box >
          <Flex gap={5} justifyContent='center' alignItems={'center'}>
          <Box>
            <Image src={Location}/>
          </Box>
         
          <Box>
            <Text fontSize={'lg'} fontWeight={'bold'}>30+</Text>
            <Text fontSize={'smaller'} color='gray.500' fontStyle={'normal'}>Locations</Text>
          </Box>
          </Flex>
        </Box>

        <Divider orientation="vertical"/>

        <Box >
          <Flex gap={5} justifyContent='center' alignItems={'center'}>
          <Box>
            <Image src={Server}/>
          </Box>
         
          <Box>
            <Text fontSize={'lg'} fontWeight={'bold'}>50+</Text>
            <Text fontSize={'smaller'} color='gray.500' fontStyle={'normal'}>Servers</Text>
          </Box>
          </Flex>
        </Box>
        </Stack>
        </Center>

     
    </Box>
  );
};

export default Feature1;
