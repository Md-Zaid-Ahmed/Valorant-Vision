import React, { useState } from 'react';
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
    createIcon,
    Progress,
  } from '@chakra-ui/react';
  import jett from '../assets/jett.png'
  import {
    AiFillAlert,
    AiFillAccountBook,
    AiFillAmazonCircle
  } from 'react-icons/ai';
  import {
    GiRank3,
    GiRocketFlight,
    GiTreasureMap,
    GiGamepad
  } from 'react-icons/gi'
  import {
    RiStarHalfLine
  } from 'react-icons/ri'
  import {
    GrInProgress
  } from 'react-icons/gr'
  import logo from '../assets/l1.jpeg'
  import GiProgression from 'react-icons/gi'
import Bonjur from './Bonjur';
import EmptyInput from './EmptyInput';
import NoIdFound from './NoIdFound';
import ErrorHand from './ErrorHand';
import Footer from './Footer';
import { EmptyComp } from './EmptyComp';
  const IMAGE = "https://dotesports.com/wp-content/uploads/2023/03/02063327/VALORANT-Omega-Jett-Killjoy-Raze.jpg?w=1200";
  

  const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
        fill="currentColor"
      />
    ),
  });
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

  
  const Cards = () => {
    const [info, setInfo] = useState(null);
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true); // set loading state to true when data fetching starts
  
      try {
        const url = `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`;
        const response = await fetch(url);
        const resJson = await response.json();
  
        // Handle error statuses
  
        if (response.status === 404) {
          setInfo(404);
        } else if (response.status === 400) {
          setInfo(400);
        } else if (response.status === 403) {
          setInfo(403);
        } else if (response.status === 408) {
          setInfo(408);
        } else if (response.status === 503) {
          setInfo(503);
        } else if (response.status === 429) {
          setInfo(429);
        } else {
          // Call second API with the region parameter
          const url2 = `https://api.henrikdev.xyz/valorant/v1/mmr-history/${resJson.data.region}/${name}/${tag}`;
          const response2 = await fetch(url2);
          const resJson2 = await response2.json();
          console.log(resJson2);
  
          // Set state with data from both API calls
          setInfo({ ...resJson, regionData: resJson2 });
          console.log(info.regionData.data[0]);
        }
      } catch (e) {
        console.log('hello' + e);
      } finally {
        setLoading(false); // set loading state to false after data is fetched
        handleClear();
      }
    };
  
    const handleClear = () => {
      setName('');
      setTag('');
    };

    return (
        <>
        <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'350px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box>
          <form onSubmit={handleSubmit} class="d-flex align-items-center w-100">
          <Flex direction={{base: "column", md: "row"}} alignItems="center" justifyContent="space-between" py={4}>
      <Input variant ="filled" placeholder="name" size="md" mb={{base: 4, md: 0}} mr={{md: 2}} fontWeight={800} value={name} onChange={(event) => setName(event.target.value)}  />
      <Input variant ="filled" placeholder="tag" size="md" mb={{base: 4, md: 0}}   value={tag} fontWeight={800} onChange={(event) => setTag(event.target.value)} maxLength={5} />
      <Button  ml={{ base: 0, md: 2 }} mt={{ base: 2, md: 0 }} style={{fontFamily : "cursive"}}  type="submit">
        +
      </Button>
    </Flex>
    </form>
    {loading && 
    //<Text as={'em'} >Hold On Tight...</Text>
    <Progress size="xs" isIndeterminate />
    }
      
     {/* display loading text if loading state is true */}
          </Box>
        </Box>
      </Center>
      {/*Card*/}
{!info ? (
  <>
  <Bonjur></Bonjur>
</>
) : info === 429 ? (
  <>
    <NoIdFound></NoIdFound>
  </>
): info === 404 ? (
  <>
    <NoIdFound></NoIdFound>
  </>
) : info === 400 ? (
  <>
     <EmptyInput></EmptyInput>
  </>
) : info === 403 ? (
    <>
      <ErrorHand></ErrorHand>
    </>
) : info === 409 ? (
    <>
        <ErrorHand></ErrorHand>
    </>
) : info === 503 ? (
      <>
          <ErrorHand></ErrorHand>
      </>

) : (
  <>
      <Center py={0} >
        <Box
          role={'group'}
          p={6}
          maxW={'600px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>{info.data.name}</Heading>
          <Text size={"sm"} as='em'>{info.data.name}#{info.data.tag}</Text>
          {/*
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
</Text>*/}
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={GiRank3} color={'yellow.500'} w={5} h={5} />
              }
              text={<Text>Player Level: {info.data.account_level}</Text>}
            />
            <Feature
             
              text={<Text>Player Rank : {info.regionData.data[0].currenttierpatched}</Text>}
              icon={
                <Image src = {info.regionData.data[0].images.small}></Image>
             }
            />
            <Feature
              icon={
                <Icon as={RiStarHalfLine} color={'yellow.500'} w={5} h={5} />
              }
              text={<Text>Last Rank Rating : {info.regionData.data[0].mmr_change_to_last_game}</Text>}
            />
            <Feature
              icon={
                <Icon as={GiRocketFlight} color={'yellow.500'} w={5} h={5} />
              }
              text={<Text>Rank Rating : {info.regionData.data[0].ranking_in_tier}/100</Text>}
            />
            <Feature
              icon={
                <Icon as={GiTreasureMap} color={'yellow.500'} w={5} h={5} />
              }
              text={<Text>Last Map Played : {info.regionData.data[0].map.name}</Text>}
            />
            <Feature
              icon={
                <Icon as={GiGamepad} color={'yellow.500'} w={5} h={5} />
              }
              text={<Text>Last Online  : {info.regionData.data[0].date} <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>Time Zone Varies</Text></Text> }
              
            />
            
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={info.data.card.large}
            objectFit={'cover'}
          />
          
        </Flex>
      </SimpleGrid>
      
    </Container>
        </Box>
        
      </Center>
      <EmptyComp></EmptyComp>
              </>
)}
<br/>
<br/>
<br/>
<Footer></Footer>
</>
    );
  }
  export default Cards