import React from 'react';

import Layout from '../../layouts/default';
import MasterCard from '../../components/Cards/MasterCard';
import AlumniCard from '../../components/Cards/AlumniCard';
import axiosInstance from '../../components/axiosInstance';

export async function getStaticProps() {
  const res = await axiosInstance.get(
    `/members-page?populate[MasterMembers][populate]=%2A&populate[AlumniMembers][populate]=%2A`
  );
  const json = await res.data;
  const content = json['data']['attributes'];

  return {
    props: { content },
  };
}

export default function MembersIndex({ content }) {
  return (
    <>
      <section className="flex relative min-h-screen py-16">
        <div className="container mx-auto justify-center p-2 md:my-auto">
          <div className="p-6 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-700">{content['MasterTitle']}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-4">
              {content['MasterMembers']['data'].map((member, idx) => (
                <MasterCard key={idx} {...member.attributes} />
              ))}
            </div>
          </div>
          <div className="border-t p-6 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-700">{content['AlumniTitle']}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
              {content['AlumniMembers']['data'].map((member, idx) => (
                <AlumniCard key={idx} {...member.attributes} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

MembersIndex.layout = Layout;
