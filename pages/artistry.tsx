import { Box } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Artistry from '@/components/artistry';

function ArtistryPage() {
  return (
    <>
      <Box minHeight="90vh" id="artistry">
        <Navbar />
        <Artistry />
      </Box>
      <Footer />
    </>
  );
}

export default ArtistryPage;
