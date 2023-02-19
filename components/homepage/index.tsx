import { useEffect, useState } from 'react';
import { Box, Heading, Container, Text, Button, Stack, VStack, Img } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import RecentBlog from '@/components/homepage/recent-blog-card';
import RecentProject from '@/components/homepage/recent-project-card';
import Footer from '@/components/footer';
import { getAllGithubStars } from '@/lib/get-all-github-stars';
import { AiOutlineGithub } from 'react-icons/ai';
import projects from '@/data/projects';
import router from 'next/router';

const Profile = ({ posts }) => {
  useEffect(() => {
    async function fetchMyAPI() {
      const count = await getAllGithubStars();
      setStars(count);
    }

    fetchMyAPI();
  }, []);

  const [stars, setStars] = useState(0);

  const showProjectsPage = () => {
    router.push('/projects');
  };

  const loadRecentProjectsAndBlogs = () => {
    const filteredProjects = projects.slice(0, 3);

    return (
      <Box display="flex" flexDirection="column" mt="1rem">
        <Box mt="1rem" ml="0.5rem">
          <Heading as="h2" size="md">
            Blogs
          </Heading>
        </Box>
        {posts.map((post, index) => (
          <Box m="0.5rem" key={index}>
            <RecentBlog post={post} />
          </Box>
        ))}
        <Box>
          <Heading as="h2" size="md" ml="0.5rem">
            Projects
          </Heading>
        </Box>
        {filteredProjects.map((project, index) => (
          <Box m="0.5rem" key={index}>
            <RecentProject project={project} />
          </Box>
        ))}
        <Button variant="ghost" onClick={showProjectsPage} colorScheme="brand">
          See all projects
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Navbar />
      <Container maxW={'3xl'}>
        <VStack textAlign={'left'} spacing={{ base: 8, md: 14 }} py={{ base: 10, md: 18 }}>
          <Stack direction="row" align={'left'} alignSelf={'left'}>
            <Img
              alt="Courtney Ngai"
              src="images/profile.jpg"
              objectFit="cover"
              width="15rem"
              height="23rem"
              borderRadius="full"
            />
            <Stack align={'center'} alignSelf={'center'} textAlign="center" paddingRight="0.5rem">
              <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
                lineHeight={'110%'}
                marginLeft={'1rem'}>
                The two constants
                <br />
                in life are <br />
                <Text as={'span'} color={'green.400'}>
                  change
                </Text>{' '}
                &{' '}
                <Text as={'span'} color={'green.400'}>
                  learning
                </Text>
              </Heading>
            </Stack>
          </Stack>

          <Text color={'black.500'}>
            Throughout my life, I’ve been the tech-enthusiast of my family with a curiosity of how
            web applications work and each component of a web app creates a harmonious system. I’ve
            also been a dancer for 20+ years which creates a practice of discipline, grit, and
            artistry/creativity. I integrate my knowledge of Software Engineering & Dance to
            creatively produce real-world solutions and leverage technology to provide value to
            users.
            <br />
            <br />
            Currently, I am a Software Engineer, Scrum Master, and Tech Lead in the PayPal Credit
            organization working mainly on the development and upkeep of React, Node, and GraphQL
            services.
            <br />
            <br />
            With my eagerness for personal growth, I enjoy learning from multiple disciplines which
            include: e-commerce, baking, and exploring dance as a physical user interface for
            abstract Software Engineering concepts to produce dance pieces for film/media.
          </Text>

          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              rounded={'full'}
              bg={'green.400'}
              href={'/about'}
              _hover={{
                bg: 'green.300'
              }}
              marginBottom={'1rem'}>
              Learn more
            </Button>
          </Stack>
        </VStack>
      </Container>
      <Box
        id="profile"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        {/* {loadRecentProjectsAndBlogs()} */}
      </Box>
      <Footer />
    </>
  );
};

export default Profile;
