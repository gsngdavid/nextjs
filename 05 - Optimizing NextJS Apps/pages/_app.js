import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <title>NextJS Events</title>
      <meta name='description' content='NextJS Events | We give you what you desire🤗' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
