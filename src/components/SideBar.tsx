"use client";

import React, { useState } from 'react';
import classNames from 'classnames';
import {
  FaBars as MenuIcon,
  FaTimes as XIcon,
  FaCommentDots as ChatBubbleLeftEllipsisIcon,
  FaPlus as PlusIcon,
  FaCog as CogIcon,
  FaQuestionCircle as QuestionMarkCircleIcon,
  FaClock as ClockIcon
} from 'react-icons/fa';

type SideBarProps = {
  recents: { firstPrompt: string; messages: { type: string; text: string }[] }[];
  onNewChat: () => void;
  onSelectRecent: (index: number) => void;
  onToggleCollapse: (collapsed: boolean) => void;
};

const SideBar: React.FC<SideBarProps> = ({ recents, onNewChat, onSelectRecent, onToggleCollapse }) => {
  const [toggleCollapse, setToggleCollapse] = useState(false);

  const wrapperClasses = classNames(
    'h-screen font-poppins px-4 pt-4 pb-4 flex justify-between flex-col bg-stone-100 dark:bg-dark-sidebar',
    {
      'w-72': !toggleCollapse,
      'w-16': toggleCollapse,
    }
  );

  const buttonClasses = classNames(
    'p-2 w-full flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-500 dark:text-light-icon',
    {
      'text-sm': !toggleCollapse,
    }
  );

  const handleToggleCollapse = () => {
    setToggleCollapse(!toggleCollapse);
    onToggleCollapse(!toggleCollapse);
  };

  return (
    <div className={wrapperClasses}>
      <div className="flex flex-col h-full">
        {/* Sidebar toggle button */}
        <div className="flex items-center justify-between pl-1 gap-4">
          <button onClick={handleToggleCollapse}>
            {toggleCollapse ? (
              <MenuIcon className="w-6 h-6 dark:text-light-icon" />
            ) : (
              <XIcon className="w-6 h-6 dark:text-light-icon" />
            )}
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-start mt-4">
          <button
            onClick={onNewChat}
            className="bg-gray-300 dark:bg-gray-600 p-2 flex items-center gap-2 mb-5 rounded-full text-gray-500 dark:text-light-icon"
          >
            <PlusIcon className="w-5 h-5" />
            {!toggleCollapse && <span className="text-sm">New Chat</span>}
          </button>

          {!toggleCollapse && (
            <>
              <h2 className="font-bold mb-4 text-gray-500 dark:text-light-icon">Recents</h2>
              <ul className="text-left w-full">
                {recents.map((chat, index) => (
                  <li
                    key={index}
                    className={buttonClasses}
                    onClick={() => onSelectRecent(index)}
                  >
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> {chat.firstPrompt}
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>

        <div className="mt-auto flex flex-col items-start mb-4 w-full">
          <button className={buttonClasses}>
            <ClockIcon className="w-5 h-5" />
            {!toggleCollapse && <span className="text-sm">Activities</span>}
          </button>
          <button className={buttonClasses}>
            <QuestionMarkCircleIcon className="w-5 h-5" />
            {!toggleCollapse && <span className="text-sm">Help</span>}
          </button>
          <button className={buttonClasses}>
            <CogIcon className="w-5 h-5" />
            {!toggleCollapse && <span className="text-sm">Settings</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;