import React from 'react';
import HomePage from '@/components/homepage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const meta = {
  type: 'website',
  title: 'Courtney Ngai Portfolio',
  summary: 'Come see what I have been coding and creating!',
  img: '/images/cn-black-logo-640x640.jpg'
};

const Home = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CNgai | Home</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.summary} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://courtneyngai.com${router.asPath}`} key="ogurl" />
        <link rel="canonical" href={`https://courtneyngai.com${router.asPath}`} />
        <meta property="og:site_name" content="Courtney Ngai" key="ogsitename" />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:image" content={meta.img} key="ogimage" />
      </Head>
      <HomePage posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default Home;
