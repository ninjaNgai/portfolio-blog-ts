import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Artistry from '@/components/artistry';

function ArtistryPage() {
  return (
    <>
      <Head>
        <title>CNgai | Artistry</title>
      </Head>
      <Box minHeight="90vh" id="artistry">
        <Navbar />
        <Artistry />
      </Box>
      <Footer />
    </>
  );
}

export default ArtistryPage;
