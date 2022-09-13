import { format, parse } from 'date-fns';
import Link from 'next/link';
import React, { useRef } from 'react';
import File from '../File';
import Resfile from '../resfile';
export default function Dashboardrow({ idx, file ,author,title}) {
  return (
    
        <div className="flex">
            <div>
              {file.data!=null ? <div> <tr className="items-center"><td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Resfile key={idx} file={file} author={author} title={title}/> </td></tr></div>:null}
            </div>
        </div>
  );
}