import { Box, Button, Card, CardBody, CardFooter, Center, Flex, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Free from '../assets/Free.svg'
import Vector from '../assets/Vector.svg'
const Plan = () => {
  return (
   <Box  mt={150} bgColor={'gray.50'} w="100%" maxW="100%" minW={0} >
    <Center>
        <VStack>

        <Text fontSize={'4xl'} fontWeight='bold' pt={10}>Choose Your Plan</Text>
        <Text textAlign={'center'}>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</Text>
        </VStack>
    </Center>

  
        <Flex justifyContent={'center'} gap={20} >
    <Card my={100}  w={250} h={600} >
        <CardBody my={3}>
            
            <VStack>

            <Image src={Free} w={120}/>
            <Text fontWeight={'bold'} pt={5}>Free Plan</Text>

            <Box pt={5}>
                
                <Box>
                    <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Unlimited Bandwitch</Text>
                    </HStack>
                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Encrypted Connection</Text>
                    </HStack>

                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>No Traffic Logs</Text>
                    </HStack>
                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Works on All Devices</Text>
                    </HStack>                   
                </Box>
                
            </Box>
            </VStack>
            
        </CardBody>

        <CardFooter>
            
            

            <Box mx='auto' textAlign={'center'}>
                <Stack>

                <Text fontWeight={'bold'} >Free</Text>
                <Button variant='outline' px={12} rounded='full' colorScheme={'red'}>Select</Button>
                </Stack>
                
            </Box>
            
            
            
        </CardFooter>
    </Card>

    <Card my='100'  w={250} h={600}>
        <CardBody my={3}>
            
            <VStack>

            <Image src={Free} w={120}/>
            <Text fontWeight={'bold'} pt={5}>Standard Plan</Text>

            <Box pt={5}>
                
                <Box>
                    <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Unlimited Bandwitch</Text>
                    </HStack>
                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Encrypted Connection</Text>
                    </HStack>

                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>No Traffic Logs</Text>
                    </HStack>
                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Works on All Devices</Text>
                    </HStack>                   
                </Box>

                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Connect Anyware</Text>
                    </HStack>                   
                </Box>
                
            </Box>
            </VStack>
            
        </CardBody>

        <CardFooter>
            
            

            <Box mx='auto' textAlign={'center'}>
                <Stack>

                <Text fontWeight={'bold'} >$9 <Text as={'span'} fontWeight='normal'>/ mo</Text> </Text>
                <Button variant='outline' px={12} rounded='full' colorScheme={'red'}>Select</Button>
                </Stack>
                
            </Box>
            
            
            
        </CardFooter>
    </Card>


    <Card my='100'  w={250} h={600}>
        <CardBody my={3}>
            
            <VStack>

            <Image src={Free} w={120}/>
            <Text fontWeight={'bold'} pt={5}>Premium Plan</Text>

            <Box pt={5}>
                
                <Box>
                    <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Unlimited Bandwitch</Text>
                    </HStack>
                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Encrypted Connection</Text>
                    </HStack>

                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>No Traffic Logs</Text>
                    </HStack>
                </Box>
                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Works on All Devices</Text>
                    </HStack>                   
                </Box>

                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Connect Anyware</Text>
                    </HStack>                   
                </Box>
                

                <Box pt={4}>
                <HStack>

                    <Image src={Vector}/>
                    <Text fontSize={'smaller'}>Get New Features</Text>
                    </HStack>                   
                </Box>
                
            </Box>
            </VStack>
            
        </CardBody>

        <CardFooter>
            
            

            <Box mx='auto' textAlign={'center'}>
                <Stack>

                <Text fontWeight={'bold'} >$9 <Text as={'span'} fontWeight='normal'>/ mo</Text> </Text>
                <Button variant='solid' px={12} rounded='full' colorScheme={'red'}shadow='xl'>Select</Button>
                </Stack>
                
            </Box>
            
            
            
        </CardFooter>
    </Card>
        </Flex>
        

   </Box>
  )
}

export default Plan