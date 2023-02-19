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
  Box
} from '@chakra-ui/react';
import { projects } from '../../constants/projects';

const About = () => {
  return (
    <>
      <Container maxW={'5xl'} py={12}>
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
                virtual items each having its own value. I would spend hours in the trading
                clubhouse finding people to trade with daily. One day, I clicked the Inspect tool
                and became curious about what the code meant and how the animations worked. Prior to
                college, I took an into to HTML, CSS, and JavaScript course which increased my
                curiosity of wanting to learn more about building web applications.
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
        <Box display="flex" justifyContent="center" alignItems="center" p="1rem">
          <GitHubCalendar username="ninjaNgai" />
        </Box>
      </Container>
    </>
  );
};

export default About;
