import About from '@/components/about';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Box } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>CNgai | About</title>
      </Head>
      <Box minHeight="90vh" id="artistry">
        <Navbar />
        <About />
      </Box>
      <Footer />
    </>
  );
};
export default AboutPage;
