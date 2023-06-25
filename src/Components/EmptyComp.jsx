import React from 'react'
import {
    Stack,
    Image,
    Text
} from '@chakra-ui/react'
import logo from '../assets/l1.jpeg'
export const EmptyComp = () => {
  return (
    <>
    <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
            >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               {/* <Image src={logo} h ={['40','400']}filter={'hue-rotate(9deg)'}></Image>
                <Text letterSpacing={"widest"} fontFamily={'cursive'} lineHeight={'190%'} p={['4','16']}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text> /*/}
        </Stack>
    </>
  )
}
