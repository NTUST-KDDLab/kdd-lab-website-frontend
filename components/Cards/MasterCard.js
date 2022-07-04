import React from 'react';

export default function MasterCard({ name, enName, imgUrl, github, email }) {
  return (
    <>
      <div className="p-3 rounded-lg text-center flex flex-col content-center border hover:shadow-lg ease-linear transition-all duration-150">
        <div className="flex items-center justify-center">
          <div className="max-w-[150px] m-2">
            <img src={imgUrl} className=" rounded-full shadow-lg "></img>
          </div>
        </div>
        <div className="my-2">
          <div className="text-xl md:text-2xl font-medium">{name}</div>
          <div className="text-md md:text-lg font-normal">{enName}</div>
        </div>

        {github || email ? (
          <div className="flex flex-row text-md place-content-center">
            {github ? (
              <a className="mr-3 text-md lg:text-lg" href={`https://github.com/${github}`} target="_blank">
                <i className="bi bi-github text-slate-600 hover:text-slate-400"></i>
              </a>
            ) : null}
            {email ? (
              <a className="text-md lg:text-lg" href={`mailto:${email}`}>
                <i className="bi bi-envelope text-slate-600 hover:text-slate-400"></i>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}
