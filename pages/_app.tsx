import { ChakraProvider, extendTheme, chakra } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import '@/styles/global.scss';

// import MDXComponents from '@/components/mdx';

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: '#48BB78',
      link: '#1890ff',
      project: '#0275d8',
      blog: '#48BB78',
      textColor: 'black',
      bgColor: 'white'
    },
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`
    }
  });

  const imgStyle = {
    width: { sm: '100%', md: '20rem', lg: '20rem' },
    height: { sm: '100%', md: 'auto', lg: '15rem' }
  };

  const blockquoteStyle = {
    borderLeft: '3px solid #48BB78',
    margin: '1rem 1rem',
    padding: '0.5rem 1rem 0.5rem 1rem'
  };

  const getImg = (pageProps) => <chakra.img {...imgStyle} {...pageProps} />;
  const getBlockquote = (pageProps) => <chakra.blockquote {...blockquoteStyle} {...pageProps} />;

  const MDXComponents = {
    img: getImg,
    blockquote: getBlockquote
  };

  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
export default MyApp;
