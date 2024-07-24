"use client";

import React from 'react';

interface FormattedResponseProps {
  text: string;
}

const FormattedResponse: React.FC<FormattedResponseProps> = ({ text }) => {
  const renderFormattedText = (inputText: string) => {

    const lines = inputText.split('\n');

    return lines.map((line, index) => {

      if (line.startsWith('## ')) {
        return <h2 key={index} className="font-bold text-2xl mt-4 text-gray-900 dark:text-gray-100">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="font-bold text-xl mt-3 text-gray-900 dark:text-gray-100">{line.substring(4)}</h3>;
      } else if (line.startsWith('* ')) {
        const item = line.substring(2);
        return <li key={index} className="ml-6 list-disc text-gray-900 dark:text-gray-100">{item}</li>;
      } else {
        // bold text using **
        const parts = line.split(/(\*\*.*?\*\*)/g).map((part, idx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <span key={idx} className="font-bold text-gray-900 dark:text-gray-100">{part.slice(2, -2)}</span>;
          }
          return part;
        });
        return <p key={index} className="mt-2 text-gray-900 dark:text-gray-100">{parts}</p>;
      }
    });
  };

  return (
    <div className="p-4 bg-white dark:bg-dark-card rounded-lg shadow-md">
      {renderFormattedText(text)}
    </div>
  );
};

export default FormattedResponse;
