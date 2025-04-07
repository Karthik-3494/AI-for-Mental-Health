
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

type BreathingState = 'idle' | 'inhale' | 'hold' | 'exhale';

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [breathingState, setBreathingState] = useState<BreathingState>('idle');
  const [cycle, setCycle] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  
  const inhaleDuration = 4;
  const holdDuration = 4;
  const exhaleDuration = 4;
  const totalCycles = 3;
  
  useEffect(() => {
    let timer: number | null = null;
    
    if (isActive) {
      if (breathingState === 'idle') {
        setBreathingState('inhale');
        setTimeLeft(inhaleDuration);
      }
      
      timer = window.setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            // Transition to the next state
            switch (breathingState) {
              case 'inhale':
                setBreathingState('hold');
                return holdDuration;
              case 'hold':
                setBreathingState('exhale');
                return exhaleDuration;
              case 'exhale':
                if (cycle >= totalCycles - 1) {
                  setIsActive(false);
                  setCycle(0);
                  setBreathingState('idle');
                  return 0;
                } else {
                  setCycle(prev => prev + 1);
                  setBreathingState('inhale');
                  return inhaleDuration;
                }
              default:
                return 0;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, breathingState, cycle]);
  
  const handleStartStop = () => {
    if (isActive) {
      setIsActive(false);
      setBreathingState('idle');
      setCycle(0);
    } else {
      setIsActive(true);
    }
  };
  
  const getAnimationClass = () => {
    switch (breathingState) {
      case 'inhale': return 'animate-breathe-in';
      case 'hold': return 'animate-breathe-hold';
      case 'exhale': return 'animate-breathe-out';
      default: return '';
    }
  };
  
  const getMessage = () => {
    switch (breathingState) {
      case 'inhale': return 'Breathe in...';
      case 'hold': return 'Hold...';
      case 'exhale': return 'Breathe out...';
      default: return 'Click start to begin';
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-6 calmi-card">
      <h3 className="text-xl font-semibold mb-4">4-4-4 Breathing Exercise</h3>
      <p className="text-gray-600 mb-6">
        Take a moment to relax and focus on your breathing.
      </p>
      
      <div className="relative mb-8 flex flex-col items-center">
        <div 
          className={`w-36 h-36 rounded-full bg-calmi-lightBlue flex items-center justify-center transition-transform duration-4000
            ${getAnimationClass()}`}
        >
          <span className="text-4xl">{timeLeft}</span>
        </div>
        <p className="mt-4 text-lg font-medium text-calmi-blue">{getMessage()}</p>
        {isActive && (
          <p className="mt-1 text-sm text-gray-500">
            Cycle {cycle + 1} of {totalCycles}
          </p>
        )}
      </div>
      
      <Button 
        onClick={handleStartStop} 
        className="calmi-button"
      >
        {isActive ? 'Stop' : 'Start Breathing'}
      </Button>
      
      <div className="mt-8 text-sm text-gray-500 max-w-md text-center">
        <p>This simple breathing technique can help reduce stress and anxiety. Practice regularly for best results.</p>
      </div>
    </div>
  );
};

export default BreathingExercise;
