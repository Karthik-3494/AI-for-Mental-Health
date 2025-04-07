
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, User, Bot } from 'lucide-react';

const Talk = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { 
      text: "Hi there! I'm Calmi, your mental health companion. How are you feeling today?", 
      sender: 'bot' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Placeholder responses for demo purposes
  // This will be replaced by your Python AI bot
  const placeholderResponses = [
    "I understand how you're feeling. Would you like to talk more about that?",
    "It sounds like you're going through a challenging time. Remember that it's okay to feel this way.",
    "I'm here to listen. Could you tell me more about what's on your mind?",
    "Taking care of your mental health is important. How can I support you today?",
    "Have you tried any relaxation techniques when you feel this way?",
    "It's brave of you to share these feelings. Let's explore ways to help you feel better.",
    "Sometimes our thoughts can overwhelm us. Let's try to break them down together.",
    "Remember that you're not alone in these feelings. Many people experience similar struggles."
  ];
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate response (replace with your Python AI integration)
    setTimeout(() => {
      const randomResponse = placeholderResponses[Math.floor(Math.random() * placeholderResponses.length)];
      const botMessage = { text: randomResponse, sender: 'bot' as const };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 flex-grow flex flex-col">
        <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col">
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Talk to Calmi AI</h1>
            <p className="text-gray-600">
              Share your thoughts and feelings in a safe, judgment-free space.
            </p>
          </div>
          
          <div className="calmi-card flex-grow flex flex-col mb-4">
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] sm:max-w-[70%] rounded-2xl p-3 ${
                      message.sender === 'user' 
                        ? 'bg-calmi-blue text-white rounded-tr-none' 
                        : 'bg-calmi-gray text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {message.sender === 'bot' ? (
                        <Bot size={16} className="mr-2" />
                      ) : (
                        <User size={16} className="mr-2" />
                      )}
                      <span className="text-sm font-medium">
                        {message.sender === 'user' ? 'You' : 'Calmi AI'}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-calmi-gray text-gray-800 rounded-2xl rounded-tl-none p-3">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef}></div>
            </div>
            
            <div className="p-4 border-t border-calmi-gray">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex space-x-2"
              >
                <Textarea
                  placeholder="Type your message here..."
                  className="calmi-input resize-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  rows={1}
                />
                <Button 
                  type="submit" 
                  className="calmi-button"
                  disabled={!input.trim() || isTyping}
                >
                  <Send size={18} />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                Press Enter to send, Shift+Enter for a new line
              </p>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 text-center">
            <p>
              Note: This is a placeholder for your custom Python AI bot.
              <br />Conversations are not stored or shared with third parties.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Talk;
