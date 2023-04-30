import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Il2 from '../assets/il2.svg'
import Ccircle from '../assets/ccircle.svg'

const Feature2 = () => {
  return (
    <Box my={10}>
      <Flex justifyContent={'space-around'} alignItems='center'>

        <Box>
            <Image src={Il2}/>
        </Box>
        <Box>
            <Text fontWeight={'bold'} fontSize='5xl'>We Provide Many <br /> Features You Can Use</Text>
            <Text mt={4}>You can explore the features that we provide with fun <br /> and have their own functions each feature.</Text>

            <Box mt={6}>
              <Stack spacing={3}>

              
              <Box>
                <Flex alignItems={'center'} gap={2}>

                <Image src={Ccircle}/>
                <Text fontSize={'sm'} fontStyle='normal'>Powerfull online protection.</Text>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems={'center'} gap={2}>
                <Image src={Ccircle}/>
                <Text fontSize={'sm'} fontStyle='normal'>Internet without borders.</Text>
                </Flex>
                </Box>
              <Box>
                <Flex alignItems={'center'} gap={2}> 
                  
              <Image src={Ccircle}/>
                <Text fontSize={'sm'} fontStyle='normal'>Supercharged VPN</Text>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems={'center'} gap={2}>

              <Image src={Ccircle}/>
                <Text fontSize={'sm'} fontStyle='normal'>No specific time limits.</Text>
                </Flex>
              </Box>
              </Stack>
            </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Feature2