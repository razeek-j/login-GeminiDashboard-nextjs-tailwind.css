import SideBar from '@/components/SideBar';

export default function Dashboard() {
  return (
    <div className="bg-white h-screen flex">
      <SideBar />
      <div className="flex-1 flex flex-col p-8">
        <div className="mb-8">
          <p className="text-xl text-gray-600">Gemini</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center mx-80">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mt-44">Hello, Razeek</h1>
            <p className="text-xl text-gray-600">How can I help you today?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-stone-100 p-4 rounded-lg shadow">Create a splashy watercolor image</div>
            <div className="bg-stone-100 p-4 rounded-lg shadow">Come up with a recipe for an upcoming event</div>
            <div className="bg-stone-100 p-4 rounded-lg shadow">Flights to Tokyo and Seoul, and things to do</div>
            <div className="bg-stone-100 p-4 rounded-lg shadow">Recommend new types of water sports, including pros & cons</div>
          </div>
          <textarea
            className="w-full h-16 p-4 bg-stone-100 rounded-full shadow resize-none mt-44 focus:outline-none"
            placeholder="Enter your prompt here"
          />
        </div>
      </div>
    </div>
  );
}
