import Head from 'next/head';
import { SessionProvider, useSession } from 'next-auth/react';
import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>知識探索暨資料探勘實驗室 國立臺灣科技大學 - NTUST KDD Lab</title>
      </Head>
      <Layout>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

MyApp.defaultProps = {
  auth: false,
};

export default MyApp;
