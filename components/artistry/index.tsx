import {
  Container,
  SimpleGrid,
  Img,
  Flex,
  Heading,
  Divider,
  Text,
  Stack,
  Box,
  Badge,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { SocialButton } from '../SocialButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSoundcloud, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Artistry = () => {
  const interviewText = () => (
    <Box>
      <Badge colorScheme="green" variant="solid">
        INTERVIEW
      </Badge>
    </Box>
  );
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginTop="2rem">
        <Stack spacing={4}>
          <Box mb={{ base: 8, md: 20 }}>
            <Box maxW="10rem" marginBottom="1rem">
              <Text
                textTransform={'uppercase'}
                color={'green.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('green.50', 'green.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                Artist Statement
              </Text>
            </Box>
            <Heading color={'black.500'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
              The &quot;why&quot; behind the movement
            </Heading>
            <Text fontSize={'lg'} color={'gray.500'}>
              &quot;Many of my creative projects explore producing movement in the present moment by
              drawing from my diverse background of various movement styles and technological
              experience.&quot;
            </Text>
            <br></br>
            <Text fontSize={'xl'} color={'black.500'}>
              Courtney Ngai is an improvisational artist, choreographer, and software engineer. She
              explores producing movement in the present moment by drawing from her diverse
              background of various movement styles and technological experience. Bringing a
              background of twenty-one years of dance experience, she has trained in the styles of
              contemporary, popping, Kpop, ballet, tap, hip hop, jazz, and Latin.
            </Text>
            <br></br>
            <Text fontSize={'xl'} color={'black.500'}>
              Courtney has presented and performed various collaborative works in many performances
              including Irene Ashu’s Hope for the World Benefit Show, Barrett Honors Talent
              Showcases, ASU Dance Undergraduate Shows, and Peter Chu’s Red, White & Chu Festival.
              She is a Phoenix native and holds a degree in Computer Science and Dance Minor from
              Barrett, The Honors College at Arizona State University. She is also an alumni of
              CONDER|dance. The topic of her Honors thesis was on the integration of web application
              development and dance improvisation. She aspires to combine dance and technology to
              create a mental footprint that will push the boundaries of how movement and the
              digital space interact and influence each other.
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {stats.map((stat) => (
              <Box key={stat.title}>
                <Text fontFamily={'heading'} fontSize={'3xl'} color={'black.500'} mb={3}>
                  {stat.title}
                </Text>
                <Text fontSize={'xl'} color={'black.400'}>
                  {stat.content}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
        <Flex flexDirection={'column'}>
          <Img
            alt="Undergrad Spring 2019"
            src="images/Undrgrd38.JPG"
            objectFit="cover"
            width="300px"
            height="400px"
            rounded="md"
            marginBottom={'1rem'}
          />
          <Img
            alt="Conder Dance Company 2019"
            src="images/Conder_Dance_01.jpg"
            objectFit="cover"
            width="300px"
            height="400px"
            rounded="md"
            marginBottom={'1rem'}
          />
          <Img
            alt="Undergrad Fall 2018"
            src="images/F18 Undergrad189.jpg"
            objectFit="cover"
            width="300px"
            height="400px"
            rounded="md"
            marginBottom={'1rem'}
          />
        </Flex>
      </SimpleGrid>
      <Divider marginTop={'2rem'} marginBottom={'1rem'} />
      <Heading marginBottom={'1rem'}>Press</Heading>
      <Stack spacing={2} direction={['column', 'row']}>
        <Box flex="1" marginRight={'1rem'}>
          <Img
            alt="Undergrad Fall 2018"
            src="/images/F18 Undergrad193.jpg"
            objectFit="cover"
            width="500px"
            height="400px"
            rounded="md"
          />
          {interviewText()}
          <Text
            as="a"
            fontSize="2xl"
            href="https://www.dancespirit.com/should-i-minor-in-dance-2640848874.html?rebelltitem=6"
            _hover={{ color: 'blue.400' }}>
            Should You Minor in Dance?
          </Text>
          <br />
          <Text as="i">Dance Spirit Magazine</Text>
        </Box>
        <Box flex="1" marginRight={'1rem'}>
          <Img
            alt="ASU Student"
            src="/images/ASU Student Weaves Art and CS.jpg"
            objectFit="cover"
            width="500px"
            height="400px"
            rounded="md"
          />
          {interviewText()}
          <Text
            as="a"
            fontSize="2xl"
            href="https://www.statepress.com/article/2019/02/spartcult-senior-courtney-ngai-uses-computer-science-to-better-understand-dance?fbclid=IwAR1iH-BLcWRqo7MuKYkbXh4cEC0Y-1niMlapMCxKceBRdJUw3nQQP1PfE30"
            _hover={{ color: 'blue.400' }}>
            ASU student weaves the art of computer science with dance
          </Text>
          <br />
          <Text as="i">ASU State Press</Text>
        </Box>
      </Stack>
      <Divider marginTop={'2rem'} marginBottom={'1rem'} />
      <Heading marginBottom={'1rem'}>Social Media</Heading>
      <Stack direction={'row'} spacing={6}>
        <VStack>
          <SocialButton
            label={'YouTube'}
            href={'https://www.youtube.com/@courtneykpops'}
            target={'_blank'}>
            <FontAwesomeIcon icon={faYoutube} size={'3x'} />
          </SocialButton>
          <Text textAlign={'center'}>@courtneykpops</Text>
        </VStack>
        <VStack>
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/courtneykpops/'}
            target={'_blank'}>
            <FontAwesomeIcon icon={faInstagram} size={'3x'} />
          </SocialButton>
          <Text textAlign={'center'}>@courtneykpops</Text>
        </VStack>
        <VStack>
          <SocialButton
            label={'Soundcloud'}
            href={
              'https://soundcloud.com/courtney-ngai-749460472/diwali-2022?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fcourtney-ngai-749460472%252Fdiwali-2022'
            }
            target={'_blank'}>
            <FontAwesomeIcon icon={faSoundcloud} size={'3x'} />
          </SocialButton>
          <Text textAlign={'center'}>@MANYI</Text>
        </VStack>
      </Stack>
    </Container>
  );
};

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700}>
    {children}
  </Text>
);

const stats = [
  {
    title: '22+',
    content: (
      <>
        <StatsText>Years of dance experience</StatsText>. She has trained in the styles of
        contemporary, popping, Kpop, ballet, tap, hip hop, jazz, and Latin.
      </>
    )
  },
  {
    title: '5+',
    content: (
      <>
        <StatsText>Years of music composition experience</StatsText>. She has created music
        compositions in Ableton and Maschine to accompany her choreography pieces.
      </>
    )
  }
];

export default Artistry;
