import GitHubCalendar from 'react-github-calendar';
import ProjectCard from '../project/card';
import {
  Container,
  Divider,
  Image,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Box,
  VStack
} from '@chakra-ui/react';
import { projects } from '../../constants/projects';
import { SocialButton } from '../SocialButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <>
      <Container maxW={'5xl'} py={20}>
        <Stack spacing={2} direction={['column', 'row']}>
          <Image
            rounded={'md'}
            width="250px"
            height="375px"
            alt={'feature image'}
            src={'images/TN2_3790.jpg'}
            objectFit={'cover'}
          />
          <Box flex="1" paddingLeft="0.5rem">
            <Stack>
              <Text
                textTransform={'uppercase'}
                color={'green.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('green.50', 'green.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                My Story
              </Text>
              <Heading>Software Engineer</Heading>
              <Text color={'black.500'} fontSize={'lg'}>
                At 10 years old, I started playing an online game that allowed you to trade for
                virtual items with assigned values. I would spend hours in the trading clubhouse
                daily finding people to trade with. One day, I decided to click on the Inspect tool
                and became curious about what the code meant and how the animations worked. Prior to
                college, I took an intro to HTML, CSS, and JavaScript course which furthered my
                interest of wanting to learn more about building web applications.
              </Text>
              <Text color={'green.600'} fontSize={'lg'}>
                Current thought: How can we build features for products that provide the most value
                to our users?
              </Text>
            </Stack>
          </Box>
        </Stack>
        <Divider margin={'1rem'} />
        <Heading marginBottom={'1rem'}>Projects</Heading>
        {projects.map((project) => (
          <ProjectCard key={project.heading} {...project} />
        ))}
        <Divider margin={'1rem'} />
        <Heading marginBottom={'1rem'}>GitHub</Heading>
        <Stack spacing={2} direction={['column', 'row']}>
          <VStack justifyContent="center" alignItems="center">
            <SocialButton label={'GitHub'} href={'https://github.com/ninjaNgai'} target={'_blank'}>
              <FontAwesomeIcon icon={faGithub} size={'3x'} />
            </SocialButton>
            <Text textAlign={'center'}>@ninjaNgai</Text>
          </VStack>
          <Box display="flex" justifyContent="center" alignItems="center" p="1rem">
            <GitHubCalendar username="ninjaNgai" />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default About;
