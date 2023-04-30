import { Box, Button, Flex, Image, Stack, Text, VStack,} from '@chakra-ui/react'
import React from 'react'
import Il1 from '../assets/Il1.svg'

const Hero = () => {
  
  return (
    <Box mt={120}>

        <Flex justifyContent={'space-around'} alignItems={'center'}>
        <Box >

            
            <Text fontSize={'5xl'} lineHeight={1.5}> <Text as={'span'} fontWeight='semibold' >Want anything to be</Text> <br /> <Text as={'span'} fontWeight='semibold'>easy with</Text> <Text as={'span'} fontWeight='bold'>LaslesVPN.</Text> </Text>

            <Text fontSize={'sm'} mt={4}>
            Provide a network for all your needs with ease and fun using <Text as={'span'} fontWeight='bold'>LaslesVPN</Text>  <br /> discover interesting features from us.
            </Text>

            
            <Button  bgColor={'red.500'} color={'white'} _hover={{bg: 'red.600'}} rounded={'lg'} mt={10}  px={8} variant='solid'>Get Started</Button>

     
            
            
        </Box>
        <Box>
            <Image src={Il1} />
        </Box>
        </Flex>
    </Box>
  )
}

export default Hero