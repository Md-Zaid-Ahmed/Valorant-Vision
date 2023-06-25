import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  WrapItem,
  useColorMode,
  Center,
  Heading,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/l2.jpeg'
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    as="div" // Set as prop to "div"
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={''}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box as='em' fontWeight={600} p={2} > 
             Valorant Vision</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <NavLink>Home</NavLink> {/* Added "Home" link */}
              <NavLink>About</NavLink> {/* Added "About" link */}
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Link href="/about"> {/* Added Link component */}
                    <Avatar
                      size={'sm'}
                      src={logo}
                    />
                  </Link>
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}     