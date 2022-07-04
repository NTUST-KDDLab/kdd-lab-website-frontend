import React from 'react';

export default function AlumniCard({ name, enName, imgUrl, github, email }) {
  return (
    <>
      <div className="p-3 rounded-lg text-start flex flex-row items-center border hover:shadow-lg ease-linear transition-all duration-150">
        <div className="flex">
          <div className="max-w-[80px] m-2">
            <img src="../img/jeffery.jpg" className=" rounded-full shadow-lg"></img>
          </div>
        </div>
        <div className="m-2">
          <div className="text-lg font-medium">{name}</div>
          <div className="text-sm font-normal">{enName}</div>
          {github || email ? (
            <div className="flex flex-row text-md mt-1">
              {github ? (
                <a className="mr-2 text-sm lg:text-md" href={`https://github.com/${github}`} target="_blank">
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
