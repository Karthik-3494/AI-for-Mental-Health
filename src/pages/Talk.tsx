
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, User, Bot, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Talk = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot'; isEmergency?: boolean }[]>([
    { 
      text: "Hi there! I'm Calmi, your mental health companion. How are you feeling today?", 
      sender: 'bot' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Make API call to your Python backend
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
        credentials: 'include' // Needed for cookies/sessions
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }
      
      const data = await response.json();
      
      // Add bot response
      const botMessage = { 
        text: data.reply, 
        sender: 'bot' as const,
        isEmergency: data.is_emergency 
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      // Show emergency notification if needed
      if (data.is_emergency) {
        toast({
          title: "Crisis Resources",
          description: "Please use the emergency resources provided.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble connecting to my brain. Please check if the server is running and try again.", 
        sender: 'bot' 
      }]);
      
      toast({
        title: "Connection Error",
        description: "Could not connect to the AI service. Make sure the Python server is running.",
        variant: "destructive"
      });
    } finally {
      setIsTyping(false);
    }
  };
  
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
            <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
              <p className="flex items-center">
                <AlertTriangle size={16} className="mr-2 flex-shrink-0" />
                <span>
                  To use this feature, make sure your Python backend server is running on <code>http://localhost:5000</code>
                </span>
              </p>
            </div>
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
                        : message.isEmergency 
                          ? 'bg-red-100 text-red-800 rounded-tl-none border border-red-300' 
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
              Connected to your custom Python AI backend.<br />
              For crisis situations, emergency resources will be provided.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Talk;
