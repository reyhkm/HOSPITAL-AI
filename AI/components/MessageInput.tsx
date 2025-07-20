
import React from 'react';
import { SendIcon } from './Icon';

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: (message: string) => void;
  isTyping: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
  input,
  setInput,
  sendMessage,
  isTyping,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      sendMessage(input);
    }
  };

  return (
    <div className="p-4 bg-white border-t border-slate-200">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pertanyaan Anda di sini..."
          disabled={isTyping}
          className="flex-1 w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 transition-shadow"
          autoFocus
        />
        <button
          type="submit"
          disabled={isTyping || !input.trim()}
          className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
