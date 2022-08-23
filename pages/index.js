import Head from 'next/head';
import Alert from '../components/Alert';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Hajin Kim. I'm a software engineer. Nice to meet you.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
      <Alert type={'success'}>
        <div>Success!</div>
      </Alert>
      <Alert type={'error'}>
        <div>Error!</div>
      </Alert>
    </Layout>
  );
}
