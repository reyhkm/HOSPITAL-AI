import React, { useState, useCallback } from 'react';
import { ChatMessage } from './types';
import { chatSession } from './services/geminiService';
import { HospitalLogoIcon } from './components/Icon';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: 'Halo! Saya MedicaBot, asisten virtual klinik MentaCare. Ada yang bisa saya bantu?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim()) return;

    const newUserMessage: ChatMessage = { role: 'user', content: messageText };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');
    setIsTyping(true);
    setError(null);

    // Add a placeholder for the model's response which will show the typing indicator
    setMessages((prevMessages) => [...prevMessages, { role: 'model', content: '' }]);

    try {
      const stream = await chatSession.sendMessageStream({ message: messageText });
      let text = '';
      for await (const chunk of stream) {
        text += chunk.text;
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages];
          newMessages[newMessages.length - 1].content = text;
          return newMessages;
        });
      }
    } catch (err) {
      const errorMessage = 'Maaf, terjadi kesalahan saat menghubungi server. Silakan coba lagi nanti.';
      setError(errorMessage);
      setMessages((prevMessages) => {
          const newMessages = [...prevMessages];
          newMessages[newMessages.length - 1].content = errorMessage;
          return newMessages;
      });
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4 font-sans">
      <div className="w-full max-w-2xl h-[90vh] flex flex-col bg-slate-50 shadow-2xl rounded-2xl overflow-hidden">
        <header className="flex items-center gap-4 p-4 bg-white border-b border-slate-200 flex-shrink-0">
          <HospitalLogoIcon className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-lg font-bold text-slate-800">AI Chatbot Rumah Sakit</h1>
            <p className="text-sm text-slate-500">Ditenagai oleh Gemini</p>
          </div>
        </header>
        
        <ChatWindow messages={messages} />

        {error && <div className="text-center text-red-500 text-sm pb-2">{error}</div>}

        <MessageInput 
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          isTyping={isTyping}
        />
      </div>
    </div>
  );
};

export default App;
