import { CameraIcon as SolidCameraIcon, MicrophoneIcon as SolidMicrophoneIcon, PencilSquareIcon, MegaphoneIcon, GlobeAltIcon, StarIcon } from '@heroicons/react/24/solid';
import SideBar from '@/components/SideBar';

export default function Dashboard() {
  return (
    <div className="bg-white h-screen flex">
      <SideBar />
      <div className="flex-1 flex flex-col p-8">
        <div className="mb-8">
          <p className="text-xl text-gray-600">Gemini</p>
        </div>
        <div className="flex-1 flex flex-col mx-80">
          <div className="text-left mb-6">
            <h1 className="bg-gradient-to-r from-blue-500 to-rose-600 bg-clip-text text-transparent text-5xl font-bold text-gray-900 mt-20">Hello, Razeek</h1>
            <p className="bg-gradient-to-r from-gray-300 to-slate-400 bg-clip-text text-transparent text-5xl font-medium">How can I help you today?</p>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full w-full">
              <div className="bg-stone-100 p-4 rounded-lg shadow relative">
                Create a splashy watercolor image
                <PencilSquareIcon className="w-6 h-6 text-gray-400 absolute bottom-2 right-2" />
              </div>
              <div className="bg-stone-100 p-4 rounded-lg shadow relative">
                Come up with a recipe for an upcoming event
                <MegaphoneIcon className="w-6 h-6 text-gray-400 absolute bottom-2 right-2" />
              </div>
              <div className="bg-stone-100 p-4 rounded-lg shadow relative">
                Flights to Tokyo and Seoul, and things to do
                <GlobeAltIcon className="w-6 h-6 text-gray-400 absolute bottom-2 right-2" />
              </div>
              <div className="bg-stone-100 p-4 rounded-lg shadow relative">
                Recommend new types of water sports, including pros & cons
                <StarIcon className="w-6 h-6 text-gray-400 absolute bottom-2 right-2" />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center relative">
            <textarea
              className="w-full max-w-4xl h-16 p-4 bg-stone-100 rounded-full shadow resize-none focus:outline-none placeholder-gray-400"
              placeholder="Enter your prompt here"
              style={{ paddingTop: '10px', paddingBottom: '10px' }}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <SolidCameraIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
              <SolidMicrophoneIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
