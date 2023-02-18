import Contact from '@/components/contact';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Box } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>CNgai | Contact</title>
      </Head>
      <Box minHeight="90vh" id="contact">
        <Navbar />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};
export default ContactPage;
