import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router.js';

import en from '../../i18n/en.json';
import zh from '../../i18n/zh.json';

const content = {
  en: en.footer,
  zh: zh.footer,
};

export default function Footer() {
  const router = useRouter();
  const locale = router.locale;

  return (
    <>
      <footer className="relative bg-slate-200 pt-8 pb-6 mt-auto">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-slate-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-xl lg:text-3xl font-semibold">{content[locale]['lab']}</h4>
              <h5 className="text-sm lg:text-md my-1 lg:my-2 text-slate-600">{content[locale]['address']}</h5>
              <h5 className="text-sm lg:text-md my-1 lg:my-2 text-slate-600">{content[locale]['tel']}</h5>
            </div>
            <div className="w-full lg:w-6/12 px-4 mt-2 lg:mt-0">
              <div className="flex flex-wrap items-top">
                <div className="w-full lg:w-4/12 px-4 ml-auto flex flex-col items-center lg:items-start">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                    {content[locale]['navigate']}
                  </span>

                  <Link href="/advisor">
                    <button
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      type="link"
                    >
                      {content[locale]['advisor']}
                    </button>
                  </Link>

                  <Link href="/members">
                    <button
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      type="link"
                    >
                      {content[locale]['members']}
                    </button>
                  </Link>

                  <Link href="/events">
                    <button
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      type="link"
                    >
                      {content[locale]['events']}
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      type="link"
                    >
                      {content[locale]['contact']}
                    </button>
                  </Link>
                </div>
                <div className="w-full lg:w-4/12 px-4 hidden">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=nnjs-footer"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=nnjs-footer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-2 lg:my-6 border-slate-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} NTUST KDD Lab
              </div>
              <div className="text-xs text-slate-400 font-semibold py-1 hidden">
                Start template from Notus NextJS by Creative Tim
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
