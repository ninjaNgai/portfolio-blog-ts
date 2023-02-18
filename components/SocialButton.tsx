import { chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';

export const SocialButton = ({ children, label, href, target }) => {
  return (
    <chakra.button
      w={'5rem'}
      h={'5rem'}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={target}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
