"use client"
import React, { useState } from 'react';
import classNames from 'classnames';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, ChatBubbleLeftEllipsisIcon, PlusIcon } from '@heroicons/react/24/outline';

const SideBar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const wrapperClasses = classNames(
    'h-screen font-poppins px-4 pt-4 pb-4 flex justify-between flex-col bg-stone-100',
    {
      'w-72': !toggleCollapse,
      'w-16': toggleCollapse,
    }
  );

  return (
    <div className={wrapperClasses}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between pl-1 gap-4">
          <button onClick={() => setToggleCollapse(!toggleCollapse)}>
            {!toggleCollapse ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        {!toggleCollapse && (
          <nav className="flex-1 flex flex-col items-start justify-center mt-4">
            <button className="bg-gray-200 rounded-full p-2 flex items-center gap-2 mb-5">
                <PlusIcon className="w-5 h-5" />
                <span className="text-sm text-gray-600">New Chat</span>
              </button>
            <h2 className="font-bold mb-4 text-gray-600">Recents</h2>
            <ul className="text-left">
              <li className="py-2 px-4 hover:bg-gray-200 rounded flex items-center gap-2">
                <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> what is next.js
              </li>
              <li className="py-2 px-4 hover:bg-gray-200 rounded flex items-center gap-2">
                <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> How to code
              </li>
              <li className="py-2 px-4 hover:bg-gray-200 rounded flex items-center gap-2">
                <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> what is a computer
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default SideBar;
