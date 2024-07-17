"use client";
import React, { useState } from 'react';
import classNames from 'classnames';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

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
        <div className="flex items-center justify-between pl-1 gap-4 mb-6">
          <button onClick={() => setToggleCollapse(!toggleCollapse)}>
            {!toggleCollapse ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        {!toggleCollapse && (
          <nav className="flex-1 flex items-center justify-center">
            <ul className="text-left">
              <li className="py-2 px-4 hover:bg-gray-200 rounded">what is next.js</li>
              <li className="py-2 px-4 hover:bg-gray-200 rounded">How to code</li>
              <li className="py-2 px-4 hover:bg-gray-200 rounded">what is a computer</li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default SideBar;
