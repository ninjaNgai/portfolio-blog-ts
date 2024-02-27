import {
  Box,
  ButtonGroup,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaYoutube, FaLaptopCode } from 'react-icons/fa';

const Links = () => {
  const IMAGE = 'images/PortfolioQR.png';
  const taglines = ['Software Engineer', 'Dance Artist', 'Founder'];

  const quickLinks = [
    {
      heading: 'Blog',
      linkUrl: 'https://www.courtneyngai.com/blogs',
      icon: 'FaLaptopCode',
      isExternal: false
    },
    {
      heading: '@courtneykpops',
      linkUrl: 'https://www.youtube.com/@courtneykpops',
      icon: 'FaYoutube',
      isExternal: true
    },
    {
      heading: 'LinkedIn',
      linkUrl: 'https://www.linkedin.com/in/courtneyngai1010/',
      icon: 'FaLinkedin',
      isExternal: true
    }
  ];

  const SocialIcon = ({ link }) => {
    let IconComponent;

    switch (link.icon) {
      case 'FaLaptopCode':
        IconComponent = FaLaptopCode;
        break;
      case 'FaYoutube':
        IconComponent = FaYoutube;
        break;
      case 'FaGithub':
        IconComponent = FaGithub;
        break;
      case 'FaLinkedin':
        IconComponent = FaLinkedin;
        break;
      default:
        IconComponent = FaLaptopCode;
        break;
    }

    return <IconComponent key={link.heading} size={24} />;
  };

  return (
    <Container maxW={'5xl'} py={12}>
      <Center pt={6}>
        <VStack spacing={4} align="center">
          <Box>
            <Image
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
              objectPosition={'top'}
              alt="Courtney Ngai"
              src="/images/headshot-30.jpeg"
              mt={5}
            />
          </Box>
          <Box>
            <Flex
              color={useColorModeValue('gray.600', 'white')}
              justifyContent="space-between"
              gap={5}>
              {taglines.map((item, index) => (
                <Text
                  key={index}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  textAlign="center">
                  {item}
                </Text>
              ))}
            </Flex>
          </Box>
          <Box>
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.linkUrl}
                isExternal={link.isExternal}
                style={{ textDecoration: 'none' }}>
                <Flex
                  as="button"
                  p={5}
                  mb={2}
                  minWidth="md"
                  alignItems="center"
                  gap="2"
                  shadow="md"
                  borderWidth="1px"
                  rounded="lg"
                  _hover={{ bg: useColorModeValue('green.300', 'green.400') }}>
                  <Box p="2">
                    <Heading size="md">{link.heading}</Heading>
                  </Box>
                  <Spacer />
                  <ButtonGroup gap="2">
                    <SocialIcon link={link} />
                  </ButtonGroup>
                </Flex>
              </Link>
            ))}
          </Box>
          <Image rounded={'lg'} height={280} width={280} objectFit={'cover'} src={IMAGE} />
          <Text>courtneyngai.com</Text>
        </VStack>
      </Center>
    </Container>
  );
};

export default Links;
