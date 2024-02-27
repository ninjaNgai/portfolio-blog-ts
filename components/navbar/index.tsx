import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  useDisclosure,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  Flex,
  Heading,
  Stack,
  Button,
  Collapse
} from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const scrollPosition = useScrollPosition();
  const router = useRouter();

  const desktopMenus = [
    { name: 'About', link: '/about' },
    { name: 'Artistry', link: '/artistry' },
    { name: 'Resume', link: './Ngai_Courtney_02.26_2024.pdf' },
    { name: 'Links', link: '/links' },
    { name: 'Blog', link: '/blogs' }
  ];

  const mobileMenus = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Artistry', link: '/artistry' },
    { name: 'Resume', link: './Ngai_Courtney_02.26_2024.pdf' },
    { name: 'Links', link: '/links' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Contact', link: '/contact' }
  ];

  const loadMenu = (isMobile = false) => {
    const menus = isMobile ? mobileMenus : desktopMenus;

    if (isMobile) {
      return (
        <Box
          height="70vh"
          m="2rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          {menus.map((menu, index) => (
            <Box
              height="10vh"
              key={index}
              fontWeight="bold"
              fontSize="2rem"
              color={router.asPath === menu.link ? 'brand' : ''}>
              <Link href={menu.link} passHref>
                {menu.name}
              </Link>
            </Box>
          ))}
        </Box>
      );
    }

    return menus.map((menu, index) => (
      <Box
        mr="20px"
        key={index}
        cursor="pointer"
        fontWeight={500}
        fontSize={'md'}
        color={router.asPath === menu.link ? 'brand' : ''}>
        <Link href={menu.link} passHref>
          <Box as="span" fontWeight="bold">
            {menu.name}
          </Box>
        </Link>
      </Box>
    ));
  };

  const getBackgroundColor = () => {
    if (colorMode === 'dark') {
      return scrollPosition > 0
        ? {
            background: 'rgba(51, 51, 54, 0.48)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(4.6px)',
            '-webkit-backdrop-filter': 'blur(4.6px)',
            border: '1px solid rgba(51, 51, 54, 0.35)'
          }
        : { backgroundColor: 'gray.800' };
    }
    return scrollPosition > 0
      ? {
          background: 'rgba(255, 255, 255, 0.21)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(4.9px)',
          '-webkit-backdrop-filter': 'blur(4.9px)',
          border: '1px solid rgba(255, 255, 255, 0.17)'
        }
      : { backgroundColor: 'white' };
  };

  const NavigationBar = () => (
    <Flex
      sx={{ ...getBackgroundColor() }}
      color={useColorModeValue('gray.600', 'white')}
      position="fixed"
      width="100%"
      zIndex={'1'}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}>
      <Flex align="center" justify="center" boxSize="full">
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <BiMenuAltRight /> : <BiMenuAltRight />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href={'/'}>
            <Heading
              as="h4"
              size="md"
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              paddingLeft="1rem"
              _hover={{
                textDecoration: 'none',
                color: 'green.400'
              }}>
              Courtney Ngai
            </Heading>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {loadMenu()}
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          paddingRight="1rem">
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <BsMoon /> : <BsSun />}
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.400'}
            href={'/contact'}
            _hover={{
              bg: 'green.300'
            }}>
            Contact
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {loadMenu(true)}
      </Collapse>
    </Flex>
  );

  return <NavigationBar />;
};

export default Navbar;
