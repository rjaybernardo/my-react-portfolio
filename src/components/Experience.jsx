import React from 'react'
import Netflix from '../assets/netflix.png'
import Crypto from '../assets/crypto.png'
import Expense from '../assets/expense-tracker.png'

const Experience = () => {
  return (
    <div
      name='experience'
      className='w-full md:h-screen text-gray-300 bg-[#0a192f] pt-24 md:pt-20 pb-64 md:pb-0'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Experience
          </p>
          <p className='py-6 text-center text-pink-600'>
            {' '}
            Check out some of my recent work
          </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className='shadow-lg  group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Netflix clone - React
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://netflix-react-dd022.web.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/rjaybernardo/netflix-reactjs'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Crypto})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Crypto Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://mellow-smakager-4f111e.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/rjaybernardo/crypto-app-reactjs'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Expense})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Expense Tracker
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://633216af00da93117ff01dda--aesthetic-gecko-2384ad.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/rjaybernardo/expense-tracker'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
