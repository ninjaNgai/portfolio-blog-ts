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
      <Navbar />
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={frontMatter.summary} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://iamcngai.com${router.asPath}`} key="ogurl" />
        <link rel="canonical" href={`https://iamcngai.com${router.asPath}`} />
        <meta property="og:site_name" content="Courtney Ngai " key="ogsitename" />
        <meta property="og:title" content={frontMatter.title} key="ogtitle" />
        <meta property="og:tag" content={frontMatter.tag} />
        <meta
          property="og:image"
          content={`https://iamcngai.com${frontMatter.socialImage}`}
          key="ogimage"
        />
      </Head>
      <Box id="blog-layout-box" className="mdx" w={['fit-content', '100%']}>
        <Global styles={prismDarkTheme} />
        <Box
          mx="auto"
          px={['1rem', '1rem', '1rem', '1rem']}
          py={['5rem', '5rem', '5rem', '5rem']}
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
