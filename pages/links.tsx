import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Box } from '@chakra-ui/react';
import Links from '@/components/links';

const LinksPage = () => {
  return (
    <>
      <Head>
        <title>CNgai | Events</title>
      </Head>
      <Box minHeight="90vh" id="contact">
        <Navbar />
        <Links />
      </Box>
      <Footer />
    </>
  );
};
export default LinksPage;
