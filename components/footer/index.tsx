import { Box, Container, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SocialFooterButton } from '../SocialFooterButton';

const Logo = () => {
  return (
    <Heading as="h4" size="md">
      CNgai Portfolio
    </Heading>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      display={'flex'}
      paddingLeft="1rem"
      paddingRight="1rem">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text>{`© ${currentYear} CN ENT LLC. All rights reserved`}</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialFooterButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/courtneyngai1010/'}
            target={'_blank'}>
            <FaLinkedin />
          </SocialFooterButton>
          <SocialFooterButton
            label={'YouTube'}
            href={'https://www.linkedin.com/in/courtneyngai1010/'}
            target={'_blank'}>
            <FaYoutube />
          </SocialFooterButton>
        </Stack>
      </Container>
    </Box>
  );
}
