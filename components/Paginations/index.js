import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router.js';
import { useEffect, useState } from 'react';
import axiosInstance from '../../components/axiosInstance';
import en from '../../i18n/en.json';
import zh from '../../i18n/zh.json';

const content = {
  en: en.footer,
  zh: zh.footer,
};

function moreHelloWorlds(num){
  
  let compList = [];  //<-- 宣告一個空的array list, 準備儲存重複的
  for (let i=1; i<=num; i++){
    compList.push(<li class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><Link href={`/dashboard/resources/${i}`} >{i}</Link></li>);
  }
  return compList; //<-- 回傳array list
}

export default function Pagination({idx}) {
  return (
      <nav aria-label="Page navigation example">
    <ul class="inline-flex items-center -space-x-px">
      {moreHelloWorlds(idx)}
    </ul>
  </nav>
  );
}
