import Contact from '@/components/contact';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Box } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>CNgai | About</title>
      </Head>
      <Box minHeight="90vh" id="artistry">
        <Navbar />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};
export default ContactPage;
