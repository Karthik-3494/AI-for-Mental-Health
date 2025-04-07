
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const WelcomeMessage = () => {
  const [name, setName] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('');
  
  useEffect(() => {
    // Get saved name from localStorage
    const savedName = localStorage.getItem('calmiUserName');
    if (savedName) {
      setName(savedName);
    } else {
      // Show dialog if no name is saved
      setShowDialog(true);
    }
    
    // Determine time of day
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('morning');
    else if (hour < 18) setTimeOfDay('afternoon');
    else setTimeOfDay('evening');
  }, []);
  
  const handleSaveName = () => {
    if (name.trim()) {
      localStorage.setItem('calmiUserName', name);
      setShowDialog(false);
    }
  };
  
  const handleChangeName = () => {
    setShowDialog(true);
  };
  
  return (
    <div className="text-center py-8">
      {name ? (
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Good {timeOfDay}, <span className="text-calmi-blue">{name}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How are you feeling today? Calmi AI is here to support your mental wellbeing.
          </p>
          <button 
            onClick={handleChangeName}
            className="text-sm text-calmi-blue hover:underline mt-2"
          >
            Not {name}? Change name
          </button>
        </div>
      ) : (
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to <span className="text-calmi-blue">Calmi AI</span>
        </h1>
      )}
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>What's your name?</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="calmi-input"
            />
          </div>
          <DialogFooter>
            <Button 
              onClick={handleSaveName} 
              className="calmi-button"
              disabled={!name.trim()}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WelcomeMessage;
