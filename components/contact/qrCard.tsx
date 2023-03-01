import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from '@chakra-ui/react';

const IMAGE = 'images/PortfolioQR.png';

export default function QrCard() {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('gray.800', 'gray.800')}
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
            filter: 'blur(20px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}>
          <Image rounded={'lg'} height={280} width={280} objectFit={'cover'} src={IMAGE} />
        </Box>
        <Stack marginTop="2rem" pt={10} align={'center'}>
          <Heading
            color={useColorModeValue('white', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={500}
            as="a"
            href="https://www.iamcngai.com/contact"
            _hover={{ color: 'blue.400' }}>
            Contact QR code
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
