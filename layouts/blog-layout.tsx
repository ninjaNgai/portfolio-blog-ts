import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { prismDarkTheme } from '@/styles/style';
import FrontMatter from '@/components/front-matter';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Footer from '@/components/footer';

const Comments = dynamic(import(/* webpackChunkName: "SocialShare" */ 'components/comments'), {
  ssr: false
});

type Props = {
  children: JSX.Element;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;
};

const meta = {
  type: 'website'
};

const BlogLayout: FC<Props> = ({ children, frontMatter }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={frontMatter.summary} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://iamcngai.com${router.asPath}`} />
        <link rel="canonical" href={`https://iamcngai.com${router.asPath}`} />
        <meta property="og:site_name" content="Courtney Ngai" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:tag" content={frontMatter.tag} />
        <meta property="og:image" content={`https://iamcngai.com${frontMatter.image}`} />
      </Head>
      <Box className="mdx">
        <Global styles={prismDarkTheme} />
        <Navbar />
        <Box
          mx="auto"
          px={['1rem', '1rem', '1rem', '1rem']}
          py={['0.5rem', '1rem', '2rem', '2rem']}
          my="2rem"
          width={['full', '34rem', '48rem', '48rem']}
          display="flex"
          flexDirection="column">
          <FrontMatter matter={frontMatter} />
          {children}
          <Comments />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default BlogLayout;
