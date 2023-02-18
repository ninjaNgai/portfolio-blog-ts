import { SiLinkedin } from 'react-icons/si';
import { Button, Center, Text } from '@chakra-ui/react';

function LinkedinSocialButton() {
  return (
    <Button
      cursor={'pointer'}
      as={'a'}
      maxW={'md'}
      colorScheme={'messenger'}
      leftIcon={<SiLinkedin />}
      href={'https://www.linkedin.com/in/courtneyngai1010/'}>
      <Center>
        <Text>Connect on Linkedin</Text>
      </Center>
    </Button>
  );
}

export default LinkedinSocialButton;
