
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const JournalEditor = () => {
  const [entry, setEntry] = useState('');
  const [savedEntries, setSavedEntries] = useState<{date: string, text: string}[]>([]);
  const [mood, setMood] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState('');
  
  // Load saved entries on component mount
  useEffect(() => {
    const entries = localStorage.getItem('calmiJournalEntries');
    if (entries) {
      setSavedEntries(JSON.parse(entries));
    }
  }, []);
  
  const saveEntry = () => {
    if (!entry.trim()) return;
    
    const newEntry = {
      date: new Date().toISOString(),
      text: entry
    };
    
    const updatedEntries = [...savedEntries, newEntry];
    setSavedEntries(updatedEntries);
    localStorage.setItem('calmiJournalEntries', JSON.stringify(updatedEntries));
    
    // Clear the current entry
    setEntry('');
    setFeedback('');
    setMood('');
  };
  
  const analyzeEntry = () => {
    if (!entry.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis (in real app, this would call your AI service)
    setTimeout(() => {
      // Simple mood detection based on keywords
      const text = entry.toLowerCase();
      let detectedMood = '';
      
      if (text.includes('happy') || text.includes('joy') || text.includes('excited')) {
        detectedMood = 'positive';
        setFeedback("It sounds like you're having a good day! I notice positive emotions in your entry.");
      } else if (text.includes('sad') || text.includes('upset') || text.includes('depressed')) {
        detectedMood = 'negative';
        setFeedback("I sense you might be feeling down today. Remember that it's okay to have these feelings, and they will pass.");
      } else if (text.includes('anxious') || text.includes('worried') || text.includes('stress')) {
        detectedMood = 'anxious';
        setFeedback("I notice signs of anxiety in your journal. Consider trying a breathing exercise to help calm your mind.");
      } else {
        detectedMood = 'neutral';
        setFeedback("Thank you for sharing your thoughts today. Journaling regularly can help you gain insights about yourself.");
      }
      
      setMood(detectedMood);
      setIsAnalyzing(false);
    }, 1500);
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="calmi-card">
        <h3 className="text-xl font-semibold mb-4">Today's Journal</h3>
        <Textarea
          placeholder="How are you feeling today? What's on your mind?"
          className="calmi-input min-h-[200px] mb-4"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={analyzeEntry} 
            className="bg-calmi-lavender text-gray-800 hover:bg-calmi-lavender/90"
            disabled={!entry.trim() || isAnalyzing}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Mood'}
          </Button>
          
          <Button 
            onClick={saveEntry} 
            className="calmi-button"
            disabled={!entry.trim()}
          >
            Save Entry
          </Button>
        </div>
        
        {feedback && (
          <div className={`mt-4 p-4 rounded-lg ${
            mood === 'positive' ? 'bg-green-50 text-green-800' :
            mood === 'negative' ? 'bg-blue-50 text-blue-800' :
            mood === 'anxious' ? 'bg-amber-50 text-amber-800' :
            'bg-gray-50 text-gray-800'
          }`}>
            <p>{feedback}</p>
          </div>
        )}
      </div>
      
      {savedEntries.length > 0 && (
        <div className="calmi-card">
          <h3 className="text-xl font-semibold mb-4">Previous Entries</h3>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {savedEntries.slice().reverse().map((entry, index) => (
              <div key={index} className="p-4 border border-calmi-gray rounded-lg">
                <div className="text-sm text-gray-500 mb-2">
                  {formatDate(entry.date)}
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{entry.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalEditor;
