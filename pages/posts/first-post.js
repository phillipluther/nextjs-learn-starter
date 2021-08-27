import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post!</title>
      </Head>
      <h1>First Post!</h1>
      <Link href="/"><a>Go home</a></Link>
    </Layout>
  );
}
