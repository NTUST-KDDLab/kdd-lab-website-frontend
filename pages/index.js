import Layout from '../layouts/default';
import Link from 'next/link';
import axiosInstance from '../components/axiosInstance';

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';
import Head from 'next/head';

const header = {
  en: en.header,
  zh: zh.header,
};

export async function getStaticProps({ locale }) {
  const res = await axiosInstance.get(`/home-page?locale=${locale}&populate=*`);
  const json = await res.data;
  const content = json['data']['attributes'];

  return {
    props: {
      content,
      locale,
    },
  };
}

export default function Home({ content, locale }) {
  return (
    <>
      <Head>
        <title>{header[locale]}</title>
        <meta property="og:title" content={header[locale]} />
      </Head>
      <h1 className="hidden">{header[locale]}</h1>
      <section className="header relative pt-16 items-center flex h-screen">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-8/12 xl:w-8/12 px-4">
            <div className="pt-0">
              <h2 className="font-semibold text-2xl sm:text-4xl text-slate-600">{content['Title']}</h2>
              <h3 className="font-semibold text-xl sm:text-3xl text-slate-600">{content['SubTitle']}</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">{content['Welcome']}</p>
              <div className="mt-12">
                {content['CTAButtons'].map((CTAButton, i) => (
                  <Link href={CTAButton['Href']} key={i} passHref>
                    <a>
                      <div className="get-started inline text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                        {CTAButton['Text']}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="research" className="mt-24 md:mt-20 pb-px relative bg-slate-100">
        <div className=" top-0 bottom-auto left-0 right-0 w-full absolute" style={{ transform: 'translateZ(0)' }}>
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-slate-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div className="-top-20 relative container mx-auto bg-slate-600 sm:rounded shadow-xl my-24">
          <div className="justify-center text-center flex flex-wrap pt-24">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl text-slate-100">{content['Research']['Header']}</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-400">{content['Research']['Content']}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 w-full px-4 ">
              {content['Topics'].map((topic, i) => (
                <div className="relative flex flex-col mt-4" key={i}>
                  <div className="px-4 py-5 flex-auto">
                    {topic['Icon'] ? (
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className={`bi bi-${topic['Icon']}`}></i>
                      </div>
                    ) : null}

                    <h3 className="text-xl mb-1 font-semibold text-slate-100">{topic['Title']}</h3>
                    <p className="mb-4 text-slate-400">{topic['Content']}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Home.layout = Layout;
