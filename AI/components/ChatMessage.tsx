import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChatMessage as ChatMessageType } from '../types';
import { HospitalLogoIcon } from './Icon';
import TypingIndicator from './TypingIndicator';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { role, content } = message;
  const isModel = role === 'model';

  // Handle the "typing" state for an empty model message
  if (isModel && !content) {
    return (
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 flex-shrink-0 bg-slate-200 rounded-full flex items-center justify-center">
          <HospitalLogoIcon className="w-5 h-5 text-slate-500" />
        </div>
        <div className="p-2 bg-white text-slate-800 rounded-b-xl rounded-tr-xl shadow-sm">
          <TypingIndicator />
        </div>
      </div>
    );
  }

  const wrapperClasses = isModel
    ? 'flex items-start gap-3'
    : 'flex items-start gap-3 flex-row-reverse';

  const bubbleClasses = isModel
    ? 'bg-white text-slate-800 rounded-b-xl rounded-tr-xl'
    : 'bg-blue-600 text-white rounded-b-xl rounded-tl-xl';
  
  const markdownContainerClasses = `text-sm markdown-content ${isModel ? 'model-markdown' : 'user-markdown'}`;

  return (
    <div className={wrapperClasses}>
      {isModel && (
        <div className="w-8 h-8 flex-shrink-0 bg-slate-200 rounded-full flex items-center justify-center">
          <HospitalLogoIcon className="w-5 h-5 text-slate-500" />
        </div>
      )}
      <div className={`p-4 max-w-lg md:max-w-xl shadow-sm ${bubbleClasses}`}>
        <div className={markdownContainerClasses}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
