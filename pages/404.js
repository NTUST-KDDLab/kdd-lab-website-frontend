import React from 'react';
import Layout from '../layouts/default';

export default function Error404() {
  return (
    <>
      <section className="header relative pt-16 items-center flex h-screen">
        <div className="container mx-auto items-center flex flex-wrap flex-row justify-center">
          <div className="w-full text-center md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-slate-600">404</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-500">NOT FOUND</p>
          </div>
        </div>
      </section>
    </>
  );
}

Error404.layout = Layout;
