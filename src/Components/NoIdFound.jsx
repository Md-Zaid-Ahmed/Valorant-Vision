import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Container
  } from '@chakra-ui/react';
  import logo from '../assets/l2.jpeg'
  const IMAGE = "https://dotesports.com/wp-content/uploads/2023/03/02063327/VALORANT-Omega-Jett-Killjoy-Raze.jpg?w=1200";
    
  
  export default function NoIdFound() {
    return (
        <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Center py={0}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={logo}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            TRY SEARCHING AGAIN !
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={300}>
          Sorry, but I'm afraid the user cannot be found, We searched high and low, all around, But alas, their presence cannot be detected
          </Heading>
          <Stack direction={'row'} align={'center'}>
            {/*
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
            */}
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {/*404 ERROR*/}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
          </Stack>
        </Stack>
      </Container>
    );
  }