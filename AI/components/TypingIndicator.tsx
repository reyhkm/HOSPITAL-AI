
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
      <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
      <div className="w-2.5 h-2.5 bg-slate-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default TypingIndicator;
