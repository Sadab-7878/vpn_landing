import { Box, Button, Flex, Heading, HStack, Image, List, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Vector from '../assets/Vector.png';
;

const Navbar = () => {
  return (
    <Box mt={5}>
    <Flex justifyContent={'space-around'} alignItems='center'>
      <Box>
        
        <Flex gap={1}>
        
            
            <Image src={Vector} w='5'/>
            
           
           <Text >
            <Text as="span" fontWeight={"semibold"}>
              Lasles
            </Text>
            <Text as="span" fontWeight="bold">
              VPN
            </Text>
          </Text>
        
        
          </Flex>
       
      </Box>
      <Box >
        
       <List cursor={'pointer'}>
       <Flex flexDirection="row" gap={10}>
        <ListItem>About</ListItem>
        <ListItem>Features</ListItem>
        <ListItem>Pricing</ListItem>
        <ListItem>Testimonials</ListItem>
        <ListItem>Help</ListItem>
        </Flex>
        </List>
      </Box>
      <Box>

            
            

            <HStack spacing={4}>
            <Button variant={'ghost'} rounded='full'>Sign In</Button>
            <Button colorScheme={'red'} variant={'outline'} px={8} rounded={'full'}>Sign Up</Button>
            </HStack>
            

      </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
