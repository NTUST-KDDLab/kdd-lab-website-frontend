import { format, parse } from 'date-fns';
import Link from 'next/link';
import React, { useRef } from 'react';
import Avatar from '../Avatar';

export default function Row({ idx, title, date, startTime, endTime, attendees }) {
  const start = parse(startTime, 'HH:mm:ss', new Date());
  const end = parse(endTime, 'HH:mm:ss', new Date());
  const time = (
    <>
      <time dateTime={startTime}>{format(start, 'h:mm a')}</time> -{' '}
      <time dateTime={endTime}>{format(end, 'h:mm a')}</time>
    </>
  );
  let attendeesLight = {};
  if (attendees.data !== null) {
    if (attendees.data.length > 4) {
      attendeesLight = attendees.data.slice(0, 3);
    } else {
      attendeesLight = attendees.data;
    }
  }
  return (
    <tr className="items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-slate-700">
        <Link href={`/dashboard/events/${idx}`}>{title}</Link>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{date}</td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{time}</td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="flex">
          {attendeesLight.map((attendee, idx) => (
            <Avatar
              key={idx}
              src={attendee.attributes.avatar.data.attributes.url}
              alt={attendee.attributes.name}
              shift={idx !== 0}
            />
          ))}
          {attendees.data.length >= 4 ? (
            <div className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4 bg-slate-50 flex justify-center items-center flex-shrink-0">
              <div className="max-h-4">
                <i className="bi bi-three-dots text-slate-700"></i>
              </div>
            </div>
          ) : null}
          {attendeesLight.length === 0 ? <div className="w-10 h-10 rounded-full flex flex-shrink-0"></div> : null}
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-right flex flex-row gap-2 justify-end">
        <Link href={`/dashboard/events/${idx}/edit`}>
          <a className="text-slate-500 p-1 border rounded h-8 w-8 flex justify-center hover:bg-slate-200">
            <i className="bi bi-pencil"></i>
          </a>
        </Link>

        <button className="text-red-500 p-1 border border-red-200 rounded h-8 w-8 flex justify-center hover:bg-red-200">
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}
