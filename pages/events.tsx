import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Box } from '@chakra-ui/react';
import Events from '@/components/events';

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>CNgai | Events</title>
      </Head>
      <Box minHeight="90vh" id="contact">
        <Navbar />
        <Events />
      </Box>
      <Footer />
    </>
  );
};
export default EventsPage;
