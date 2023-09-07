import React from 'react';

export default function Navbar() {
  return (
    <header className='shadow-xl px-4 fixed w-full border-b-4 border-[--clr-brown]'>
      <div className='py-4 sm:max-w-6xl sm:mx-auto'>
        <nav className='flex justify-between mt-2'>
          <a
            href='/'
            className='-skew-x-12 font-semibold hover:skew-x-0 transition relative group'
          >
            Emily's <span className='text-[--clr-brown]'>Travel</span> Blog
            <svg
              className='absolute -top-2 group-hover:translate-x-10 right-0 opacity-0 group-hover:opacity-100 transition'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 1024 1024'
            >
              <path
                fill='#000'
                d='M192 413.952V896h640V413.952L512 147.328L192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z'
              />
            </svg>
          </a>
          <a
            href='/posts'
            className='-skew-x-12 font-semibold hover:skew-x-0 group transition flex gap-1 relative'
          >
            Posts
            <svg
              className='absolute top-0 group-hover:-translate-y-4 right-0 opacity-0 group-hover:opacity-100 transition'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 1024 1024'
            >
              <path
                fill='#000'
                d='M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800L147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z'
              />
              <path
                fill='#000'
                d='M512 499.2a51.2 51.2 0 1 1 0-102.4a51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4a51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4a51.2 51.2 0 0 1 0 102.4z'
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
