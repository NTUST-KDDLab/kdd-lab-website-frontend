import React from 'react';

import Layout from '../../layouts/default';
import MasterCard from '../../components/Cards/MasterCard';
import AlumniCard from '../../components/Cards/AlumniCard';

export default function MembersIndex() {
  return (
    <>
      <section className="flex relative min-h-screen py-16">
        <div className="container mx-auto justify-center p-2 md:my-auto">
          <div className="p-6 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-700">Master Student</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-6 py-4">
              <MasterCard
                name="何嘉峻"
                enName="Chia-Chun Ho"
                imgUrl="/img/jeffery.jpg"
                email={'m10915109@gapps.ntust.edu.tw'}
                github="chiachunho"
              />
            </div>
          </div>
          <div className="border-t p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-700">Alumni</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
              <AlumniCard
                name="何嘉峻"
                enName="Chia-Chun Ho"
                imgUrl="/img/jeffery.jpg"
                email={'m10915109@gapps.ntust.edu.tw'}
                github="chiachunho"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

MembersIndex.layout = Layout;
