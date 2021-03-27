/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import Layout from '../components/layout/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <title>DSA Blog</title>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
