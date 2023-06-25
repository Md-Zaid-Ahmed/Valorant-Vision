import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    Flex,
    Button,
    Container,
    SimpleGrid,
    Icon,
    StackDivider,
    Head,
    createIcon
  } from '@chakra-ui/react';
const ErrorHand = () => {
  return (
    <>
    <Container maxW={'3xl'}>
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}>
      <Heading
      as={'em'}
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Sorry! <br />
        <Text as={'em'}  color={'green.400'}>
        ‎
        </Text>
      </Heading>
      <Text color={'gray.500'}>
      "Please Wait we  are facing some issues with our servers"
      </Text>
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        
      </Stack>
    </Stack>
  </Container>
    </>
  )
}

export default ErrorHand