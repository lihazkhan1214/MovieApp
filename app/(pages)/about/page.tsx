import React from 'react';
import { BsCameraReelsFill } from 'react-icons/bs';
import { FaTheaterMasks } from 'react-icons/fa';
import { LuClapperboard } from 'react-icons/lu';
import { PiFilmReelFill } from 'react-icons/pi';
import Test from './component/Test';

const Page = () => {
  return (
    <>
      <section className="relative md:pt-16 bg-blueGray-50 mt-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 lg:w-4/12 px-2 md:px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <img 
                  alt="Example landscape" 
                  src="https://m.media-amazon.com/images/M/MV5BYzg4OTUzNmQtMzU0Yy00YTQ2LTgyZmItNjJkZjIwYWNmZjIyXkEyXkFqcGc@._V1_.jpg" 
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="bg-black relative p-4 md:p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Great Movies here
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages presentation
                    to login areas, you can easily customise and build your pages.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-2">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-2">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-3 flex-auto">
                      <div className="bg-black animate-bounce text-white text-2xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 shadow-lg rounded-full">
                        <FaTheaterMasks />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Many characters</h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus JS comes with a huge number of fully coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-3 flex-auto">
                      <div className="text-white animate-bounce bg-black text-2xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 shadow-lg rounded-full">
                        <LuClapperboard />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Best Search Movies 
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React, NextJS,
                        Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-2">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-3 flex-auto">
                      <div className="text-white hover:animate-spin text-2xl animate-bounce bg-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 shadow-lg rounded-full">
                        <PiFilmReelFill />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Wonderful Stories</h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-3 flex-auto">
                      <div className="text-white text-2xl animate-bounce shadow-white shadow-xl bg-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                        <BsCameraReelsFill />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Best Cinematography</h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how easy
                        it is to work with Notus JS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Test />
      </div>
    </>
  );
};

export default Page;
