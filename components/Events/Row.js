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
            <div key={idx}>
            <Avatar
              key={idx}
              src={attendee.attributes.avatar.data.attributes.url}
              alt={attendee.attributes.name}
            />
            {attendee.attributes.name}
            </div>
          ))}
          {attendeesLight.length === 0 ? <div className="w-10 h-10 rounded-full flex flex-shrink-0"></div> : null}
        </div>
      </td>
    </tr>
  );
}
