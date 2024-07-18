"use client"
import React, { useState } from 'react';
import classNames from 'classnames';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, ChatBubbleLeftEllipsisIcon, PlusIcon, CogIcon, QuestionMarkCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

const SideBar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const wrapperClasses = classNames(
    'h-screen font-poppins px-4 pt-4 pb-4 flex justify-between flex-col bg-stone-100',
    {
      'w-72': !toggleCollapse,
      'w-16': toggleCollapse,
    }
  );

  const buttonClasses = 'p-2 w-full flex items-center gap-2 hover:bg-gray-200 rounded-lg';

  return (
    <div className={wrapperClasses}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between pl-1 gap-4">
          <button onClick={() => setToggleCollapse(!toggleCollapse)}>
            {!toggleCollapse ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        <nav className="flex-1 flex flex-col items-start justify-center mt-4">
          <button className="bg-gray-300 p-2 flex items-center gap-2 mb-5 rounded-full">
            <PlusIcon className="w-5 h-5 text-gray-600" />
            {!toggleCollapse && <span className="text-sm text-gray-600">New Chat</span>}
          </button>
          {!toggleCollapse && (
            <>
              <h2 className="font-bold mb-4 text-gray-600">Recents</h2>
              <ul className="text-left w-full">
                <li className={buttonClasses}>
                  <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> what is next.js
                </li>
                <li className={buttonClasses}>
                  <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> How to code
                </li>
                <li className={buttonClasses}>
                  <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> what is a computer
                </li>
              </ul>
            </>
          )}
        </nav>
        <div className="mt-auto flex flex-col items-start justify-center mb-4 w-full">
          <button className={buttonClasses}>
            <ClockIcon className="w-5 h-5" />
            {!toggleCollapse && <span className="text-sm text-gray-600">Activities</span>}
          </button>
          <button className={buttonClasses}>
            <QuestionMarkCircleIcon className="w-5 h-5" />
            {!toggleCollapse && <span className="text-sm text-gray-600">Help</span>}
          </button>
          <button className={buttonClasses}>
            <CogIcon className="w-5 h-5" />
            {!toggleCollapse && <span className="text-sm text-gray-600">Settings</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
