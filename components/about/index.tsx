import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import Footer from '@/components/footer';
import GitHubCalendar from 'react-github-calendar';
import SocialIcons from '@/components/homepage/social-icons';

const About = () => {
  return (
    <>
      <Box minHeight="90vh" id="about">
        <Navbar />
        <Box display="flex" justifyContent="center" alignItems="center" p="1rem">
          <GitHubCalendar username="ninjaNgai" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
