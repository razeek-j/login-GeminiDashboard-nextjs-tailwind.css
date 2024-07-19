import React from 'react';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { CameraIcon, MicrophoneIcon, PencilSquareIcon, MegaphoneIcon, GlobeAltIcon, StarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import SideBar from '@/components/SideBar';

export default function Dashboard() {
  return (
    <div className="bg-white h-screen flex">
      <SideBar />
      <div className="flex-1 flex flex-col p-8 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl text-gray-600">Gemini</div>
          <div className="flex items-center space-x-4">
            <HiOutlineSquares2X2 className="w-6 h-6 text-gray-400" />
            <UserCircleIcon className="w-10 h-10 rounded-full" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="text-left mb-6">
            <h1 className="bg-gradient-to-r from-blue-500 to-rose-600 bg-clip-text text-transparent text-5xl font-bold text-gray-900 mt-20">Hello, Razeek</h1>
            <p className="bg-gradient-to-r from-gray-300 to-slate-400 bg-clip-text text-transparent text-5xl font-medium">How can I help you today?</p>
          </div>
          <div className="flex flex-1 justify-center items-center overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl w-full">
              <div className="bg-stone-100 p-4 rounded-lg shadow relative h-48 min-w-[195px] flex flex-col justify-between">
                <div>Create a splashy watercolor image</div>
                <PencilSquareIcon className="w-6 h-6 text-gray-400 absolute bottom-2 right-2" />
              </div>
              <div className="bg-stone-100 p-4 rounded-lg shadow relative h-48 min-w-[195px] flex flex-col justify-between">
                <div>Come up with a recipe for an upcoming event</div>
                <MegaphoneIcon className="w-6 h-6 text-gray-400 absolute bottom-2 right-2" />
              </div>
              <div className="bg-stone-100 p-4 rounded-lg shadow relative h-48 min-w-[195px] flex flex-col justify-between">
                <div>Flights to Tokyo and Seoul, and things to do</div>
                <GlobeAltIcon className="w-6 h-6 text-gray-400 absolute bottom-2 right-2" />
              </div>
              <div className="bg-stone-100 p-4 rounded-lg shadow relative h-48 min-w-[195px] flex flex-col justify-between">
                <div>Recommend new types of water sports, including pros & cons</div>
                <StarIcon className="w-6 h-6 text-gray-400 absolute bottom-2 right-2" />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center relative w-full">
            <div className="relative w-full max-w-4xl">
              <textarea
                className="w-full h-14 p-4 bg-stone-100 rounded-full shadow resize-none focus:outline-none placeholder-gray-400"
                placeholder="Enter your prompt here"
                style={{ paddingTop: '18px', paddingBottom: '10px' }}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
                <CameraIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
                <MicrophoneIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
}
