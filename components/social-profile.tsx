import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import LinkedinSocialButton from './linkedin-social-button';

export default function SocialProfile() {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3411&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={'./images/profile.jpg'}
            css={{
              border: '2px solid white'
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading
              color={useColorModeValue('gray.800', 'white')}
              fontSize={'2xl'}
              fontWeight={500}
              fontFamily={'body'}>
              Courtney Ngai
            </Heading>
            <Text color={'gray.500'}>Software Engineer | Artist</Text>
          </Stack>
          <LinkedinSocialButton />
        </Box>
      </Box>
    </Center>
  );
}
