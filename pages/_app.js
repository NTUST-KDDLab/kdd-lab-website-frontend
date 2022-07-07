import Head from 'next/head';
import { SessionProvider, useSession } from 'next-auth/react';
import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter } from 'next/router.js';

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

const content = {
  en: en.header,
  zh: zh.header,
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const router = useRouter();
  const locale = router.locale;

  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{content[locale]}</title>
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
