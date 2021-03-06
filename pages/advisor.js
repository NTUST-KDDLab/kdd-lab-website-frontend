import React from 'react';
import Head from 'next/head';
import Layout from '../layouts/default';

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

const title = {
  en: { title: en.header, prefix: en.navbar.advisor },
  zh: { title: zh.header, prefix: zh.navbar.advisor },
};

export async function getServerSideProps({ locale }) {
  return {
    props: { locale },
  };
}

export default function Advisor({ locale }) {
  return (
    <>
      <Head>
        <title>
          {title[locale].prefix} | {title[locale].title}
        </title>
        <meta property="og:title" content={`${title[locale].prefix} | ${title[locale].title}`} />
      </Head>
      <h1 className="hidden">
        {title[locale].prefix} | {title[locale].title}
      </h1>
      <main className="profile-page">
        {/* bg-image */}
        <section className="relative block h-96">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
        </section>
        {/* content */}
        <section className="relative py-16 bg-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col bg-white shadow-xl rounded-lg -mt-64 p-3 sm:p-12">
              {/* info */}
              <div className="flex flex-row flex-wrap py-3">
                <div className="flex w-full sm:w-fit justify-center sm:justify-start  mt-6 sm:mt-0">
                  <picture>
                    <img
                      src="/img/brdai.jpeg"
                      alt="Bi-Ru Dai"
                      className="max-w-[100px] self-center shadow-xl rounded-lg align-middle border-none"
                    />
                  </picture>
                </div>
                <div className="flex flex-col w-full sm:w-fit text-center sm:text-start mt-2 sm:mt-0 sm:ml-4 md:mx-6 sm:py-2">
                  <h3 className="text-2xl lg:text-4xl font-semibold leading-normal text-slate-700">?????????</h3>
                  <h3 className="text-xl lg:text-2xl font-semibold leading-normal text-slate-700 mb-2">Bi-Ru Dai</h3>
                  <div className="text-md lg:text-lg leading-normal mt-auto text-slate-400 uppercase">
                    ???????????????????????? ??????????????? ?????????
                  </div>
                </div>
                <div className="flex flex-col w-full sm:w-fit text-center justify-around sm:text-start mt-2 lg:mt-0 lg:ml-4 sm:py-2">
                  <div className="mb-2 text-slate-600 text-sm lg:text-md">
                    <i className="bi bi-building mr-2 text-slate-400"></i>
                    106 ????????????????????????????????? 43 ??? T4-514
                  </div>
                  <div className="mb-2 text-slate-600 text-sm lg:text-md">
                    <i className="bi bi-telephone mr-2 text-slate-400"></i>
                    886-2-27301218
                  </div>
                  <div className="mb-2 text-slate-600 text-sm lg:text-md">
                    <i className="bi bi-printer mr-2 text-slate-400"></i>
                    886-2-27301081
                  </div>
                  <div className="text-slate-600 text-sm lg:text-md">
                    <i className="bi bi-envelope mr-2 text-slate-400"></i>
                    brdai@csie.ntust.edu.tw
                  </div>
                </div>
              </div>

              {/* research, teaching */}
              <div className="border-t border-slate-200 px-2 md:p-6 lg:p-12">
                <div className="my-4">
                  <h4 className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900">??????</h4>
                  <div className="mb-4 text-md sm:text-lg leading-relaxed text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside">
                      <li>?????????????????? ???????????????????????? ??????</li>
                      <li>?????????????????? ?????????????????? ??????</li>
                    </ul>
                  </div>
                </div>
                <div className="my-4">
                  <h4 className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900">????????????</h4>
                  <div className="mb-4 text-md sm:text-lg leading-relaxed text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside">
                      <li>????????????</li>
                      <li>??????????????????</li>
                      <li>??????????????????</li>
                    </ul>
                  </div>
                </div>
                <div className="my-4">
                  <h4 className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900">??????</h4>
                  <div className="mb-4 text-md sm:text-lg leading-relaxed text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside">
                      <li>???????????????</li>
                      <li>????????????</li>
                      <li>???????????????</li>
                      <li>????????????</li>
                      <li>??????????????????</li>
                      <li>??????????????????</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* publication */}
              <div className="border-t border-slate-200 px-2 md:p-6 lg:p-12">
                <div className="my-4">
                  <h4 className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900">??????</h4>
                  <h5 className="mb-4 text-md sm:text-lg font-medium text-slate-800">????????????</h5>
                  <div className="mb-4 text-sm leading-loose text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside ">
                      <li>
                        Chih-Heng Chung, Bi-Ru Dai:A fragment-based iterative consensus clustering algorithm with a
                        robust similarity. Knowl. Inf. Syst. 41(3): 591-609 (2014)(SCI)
                      </li>

                      <li>
                        Bi-Ru Dai, Chang-Yi Lee: CSM: A Framework of Recommendation System Combining Network Structure
                        and Messages. Journal of Computers, 22(2): 11-22 (2011) (EI)
                      </li>

                      <li>
                        Yong-Huai Huang, Kuo-Liang Chung, Bi-Ru Dai: Improved inverse halftoning using vector and
                        texture-lookup table-based learning approach. Expert Syst. Appl. 38(12): 15573-15581 (2011)(SCI)
                      </li>

                      <li>
                        Jen-Wei Huang, Bi-Ru Dai, Ming-Syan Chen: Twain: Two-end association miner with precise frequent
                        exhibition periods. TKDD 1(2): 8 (2007)(SCI)
                      </li>

                      <li>
                        Mi-Yen Yeh, Bi-Ru Dai, Ming-Syan Chen: Clustering over Multiple Evolving Streams by Events and
                        Correlations. IEEE Trans. Knowl. Data Eng. 19(10): 1349-1362 (2007)(SCI)
                      </li>

                      <li>
                        Bi-Ru Dai, Cheng-Ru Lin, Ming-Syan Chen: Constrained data clustering by depth control and
                        progressive constraint relaxation. VLDB J. 16(2): 201-217 (2007)(SCI)
                      </li>

                      <li>
                        Bi-Ru Dai and Ming-Syan Chen: Constrained Clustering for the Evolving Data Stream. Journal of
                        Computers, Special issue on Data Mining, Vol.17, No.4. (2007)
                      </li>

                      <li>
                        Bi-Ru Dai, Jen-Wei Huang, Mi-Yen Yeh, Ming-Syan Chen: Adaptive Clustering for Multiple Evolving
                        Streams. IEEE Trans. Knowl. Data Eng. 18(9): 1166-1180 (2006)(SCI)
                      </li>
                    </ul>
                  </div>
                  <h5 className="mb-4 text-md sm:text-lg font-medium text-slate-800">??????????????????</h5>
                  <div className="mb-4 text-sm leading-loose text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside ">
                      <li>
                        Mu-Yao Fang, Bi-Ru Dai: Power of Bosom Friends, POI Recommendation by Learning Preference of
                        Close Friends and Similar Users. DaWaK 2016: 179-192
                      </li>

                      <li>
                        Sin-Kai Wang, Bi-Ru Dai: A G-Means Update Ensemble Learning Approach for the Imbalanced Data
                        Stream with Concept Drifts. DaWaK 2016: 255-266
                      </li>

                      <li>
                        Chih-Heng Chung, Bi-Ru Dai: A Framework of the Semi-supervised Multi-label Classification with
                        Non-uniformly Distributed Incomplete Labels. DaWaK 2016: 267-280
                      </li>

                      <li>
                        Bing-Hao Huang, Bi-Ru Dai: A Weighted Distance Similarity Model to Improve the Accuracy of
                        Collaborative Recommender System. MDM (2) 2015: 104-109
                      </li>

                      <li>
                        Bo-Yu Hsiao, Chih-Heng Chung, Bi-Ru Dai: A Model of Relevant Common Author and Citation
                        Authority Propagation for Citation Recommendation. MDM (2) 2015: 117-119
                      </li>

                      <li>
                        Huei-Yu Lung, Chih-Heng Chung, Bi-Ru Dai: Predicting Locations of Mobile Users Based on Behavior
                        Semantic Mining. PAKDD Workshops 2014: 168-180
                      </li>

                      <li>
                        Chung-Kai Tseng, Chih-Heng Chung, Bi-Ru Dai: Classifying the TRIZ Contradiction Problem of the
                        Patents Based on Engineering Parameters. TAAI 2014: 344-353
                      </li>

                      <li>Po-Wei Liang, Bi-Ru Dai: Opinion Mining on Social Media Data. MDM (2) 2013: 91-96</li>

                      <li>
                        Bi-Ru Dai, I-Chang Lin: Efficient Map/Reduce-Based DBSCAN Algorithm with Optimized Data
                        Partition. IEEE CLOUD 2012: 59-66
                      </li>

                      <li>
                        Bi-Ru Dai, Chih-Heng Chung: LF-CARS: A Loose Fragment-Based Consensus Clustering Algorithm with
                        a Robust Similarity. Discovery Science 2012: 154-168
                      </li>

                      <li>
                        Bi-Ru Dai, Chang-Yi Lee, Chih-Heng Chung: A Framework of Recommendation System Based on Both
                        Network Structure and Messages. ASONAM 2011: 709-714
                      </li>

                      <li>
                        Bi-Ru Dai, Meng-Yan Lin: Efficiently Mining Dynamic Zonal Co-location Patterns Based on Maximal
                        Co-locations. ICDM Workshops 2011: 861-868
                      </li>

                      <li>
                        Bi-Ru Dai, Shu-Ming Hsu: An Instance Selection Algorithm Based on Reverse Nearest Neighbor.
                        PAKDD (1) 2011: 1-12
                      </li>

                      <li>
                        Bi-Ru Dai, Pai-Yu Lin: iTM: An Efficient Algorithm for Frequent Pattern Mining in the
                        Incremental Database without Rescanning. IEA/AIE 2009: 757-766
                      </li>

                      <li>
                        Bi-Ru Dai, Yang-Tze Lin: A Decision Tree Based Quasi-Identifier Perturbation Technique for
                        Preserving Privacy in Data Mining. RCIS 2009: 187-196
                      </li>

                      <li>
                        Ya-Ping Kuo, Pai-Yu Lin, Bi-Ru Dai: Hiding Frequent Patterns under Multiple Sensitive
                        Thresholds. DEXA 2008: 5-18
                      </li>

                      <li>
                        Chih-Hua Tai, Bi-Ru Dai, Ming-Syan Chen: Incremental Clustering in Geography and Optimization
                        Spaces. PAKDD 2007: 272-283
                      </li>

                      <li>
                        Mi-Yen Yeh, Bi-Ru Dai, Ming-Syan Chen: COMET: Event-Driven Clustering over Multiple Evolving
                        Streams. PAKDD 2006: 719-723
                      </li>

                      <li>
                        Bi-Ru Dai, Jen-Wei Huang, Mi-Yen Yeh, Ming-Syan Chen: Clustering on Demand for Multiple Data
                        Streams. ICDM 2004: 367-370
                      </li>

                      <li>
                        Bi-Ru Dai, Cheng-Ru Lin, Ming-Syan Chen: On the Techniques for Data Clustering with Numerical
                        Constraints. SDM 2003: 264-268
                      </li>
                    </ul>
                  </div>
                  <h5 className="mb-4 text-md sm:text-lg font-medium text-slate-800">??????????????????</h5>
                  <div className="mb-4 text-sm leading-loose text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside ">
                      <li>
                        ?????????????????????????????????????????????????????????2011???11??????????????????????????????????????????????????????????????????????????????????????????????????????
                        The 16th National Conference on Vehicle Engineering
                        ????????????????????????????????????????????????????????????Taipei, Taiwan???
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

Advisor.layout = Layout;
