import React from 'react';
import Image from 'next/image';

export default function AlumniCard({ name, subName, avatar, github, email }) {
  let avatarUrl;
  if (avatar.data.attributes['format']) {
    if (avatar.data.attributes.format['small']) {
      avatarUrl = avatar.data.attributes.formats.small.url;
    }
  } else {
    avatarUrl = avatar.data.attributes.url;
  }
  return (
    <>
      <div className="p-3 rounded-lg text-start flex flex-row items-center border hover:shadow-lg ease-linear transition-all duration-150">
        <div className="flex">
          <picture className="max-w-[80px] m-2">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}${avatarUrl}`} alt={name} className="rounded-full shadow-lg" />
          </picture>
        </div>
        <div className="m-2">
          <div className="text-lg font-medium">{name}</div>
          <div className="text-sm font-normal">{subName}</div>
          {github || email ? (
            <div className="flex flex-row text-md mt-1">
              {github ? (
                <a
                  className="mr-2 text-sm lg:text-md"
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="bi bi-github text-slate-600 hover:text-slate-400"></i>
                </a>
              ) : null}
              {email ? (
                <a className="mr-2 text-sm lg:text-md" href={`mailto:${email}`}>
                  <i className="bi bi-envelope text-slate-600 hover:text-slate-400"></i>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
