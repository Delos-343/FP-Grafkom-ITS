import React from 'react'
import Ships from './Ships'

const Hero = () => {
  return (
    <section>
      <div className="dark:bg-violet-900">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none xl:max-w-3xl text-gray-100">
            Mohammed Fachry Dwi Handoko
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-300">
            5 0 2 5 2 0 1 1 5 9
          </p>
          <div className="flex flex-wrap justify-center">
            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-blue-400 text-gray-50">
              GitHub
            </button>
            <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-100 text-gray-50">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
      <div className="w-5/6 h-auto mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-100">
        <Ships />
      </div>
    </section>
  )
}

export default Hero