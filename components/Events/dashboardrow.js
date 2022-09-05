import { format, parse } from 'date-fns';
import Link from 'next/link';
import React, { useRef } from 'react';
import File from '../File';
export default function Dashboardrow({ idx, title, date, startTime, endTime, attendees,resources }) {
  const start = parse(startTime, 'HH:mm:ss', new Date());
  const end = parse(endTime, 'HH:mm:ss', new Date())
  ;
  const time = (
    <>
      <time dateTime={startTime}>{format(start, 'h:mm a')}</time> -{' '}
      <time dateTime={endTime}>{format(end, 'h:mm a')}</time>
    </>
  );
  let attendeesLight = {};
  if (attendees.data !== null) {
    if (resources.data.length > 0) {
      //console.log(resources.data[0]['attributes']['title']);
      attendeesLight = resources.data;
    } 
  }
  console.log('data', attendeesLight);
  return (
    <tr className="items-center">
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex">
            <div >
              {resources.data.map((resource, idx) => (
                  <File key={idx} resource={resource} />
                ))}
            </div>
          {attendeesLight.length === 0 ? <div className="w-10 h-10 rounded-full flex flex-shrink-0"></div> : null}
        </div>
      </td>
    </tr>
  );
}