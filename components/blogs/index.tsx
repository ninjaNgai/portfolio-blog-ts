import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import { Box, Heading, Container } from '@chakra-ui/react';
import ArticleCard from '@/components/blogs/card';
import { Posts } from '@/types/blog';
import Footer from '@/components/footer';

const Blog: FC<Posts> = (props): JSX.Element => {
  const sortedPosts = props.posts.slice().sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <>
      <Box height="90vh" id="profile">
        <Navbar />
        <Container maxWidth={'4xl'} marginTop="1rem">
          <Heading>Latest Posts</Heading>
        </Container>
        <Box color="textColor" minHeight="90vh" height="100%" p="2rem">
          {sortedPosts.map((post, index) => (
            <ArticleCard key={index} post={post} />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Blog;
