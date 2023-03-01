import { useState } from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
  Image
} from '@chakra-ui/react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import SocialProfile from '../social-profile';
import QrCard from './qrCard';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();

  const invalidField = name === '' || email === '' || message === '';

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (invalidField) {
      toast({
        title: 'Email not sent.',
        description: 'Please ensure all fields are filled out.',
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true
      });
    } else {
      const data = {
        sender: name,
        senderEmail: email,
        receiver: 'Courtney',
        subject: `Message from ${email}`,
        message
      };

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          setName('');
          setEmail('');

          toast({
            title: 'Email sent!',
            description: "You'll receive a response within 24 to 48 hours.",
            status: 'success',
            duration: 9000,
            position: 'top',
            isClosable: true
          });
        } else if (res.status === 500) {
          toast({
            title: 'Email not sent.',
            description: 'Please try again.',
            status: 'error',
            duration: 9000,
            position: 'top',
            isClosable: true
          });
        }
      });
    }
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bgGradient="linear(to-r, blue.700, green.500)"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 20, lg: 20 }}
          marginTop="5rem"
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <VStack alignItems={'left'}>
                <Heading>Contact</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                  Fill out the form to contact.
                </Text>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" onChange={(e) => onChangeName(e)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="email">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" onChange={(e) => onChangeEmail(e)} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300'
                            }}
                            placeholder="message"
                            onChange={(e) => onChangeMessage(e)}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="green.400"
                            color="white"
                            _hover={{}}
                            onClick={(e) => handleSubmit(e)}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </VStack>
              <WrapItem>
                <Box>
                  <Container maxW="sm" color="white" paddingInlineStart={0}>
                    <Box paddingBottom={'3.75rem'} />
                    <SocialProfile />
                    <Text paddingLeft={'3rem'} paddingBottom={'2rem'} paddingRight={'2.5rem'}>
                      Note for recruiters: Due to high volume, please reach out with the prefix{' '}
                      <span role="img" aria-label="red 100">
                        💯
                      </span>
                      as all other emails will be filtered out. Thank you!
                    </Text>
                  </Container>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
          <VStack alignItems={'left'}>
            <Box>
              <QrCard />
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
