
import Navbar from '@/components/Navbar';
import BreathingExercise from '@/components/BreathingExercise';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wind, Moon, Sun, Music } from 'lucide-react';

const Mindfulness = () => {
  const meditationExercises = [
    {
      title: "Body Scan",
      description: "A guided meditation to increase awareness of physical sensations",
      duration: "10 min",
      icon: <Sun className="h-6 w-6 text-calmi-blue" />
    },
    {
      title: "Loving-Kindness",
      description: "Develop compassion for yourself and others",
      duration: "15 min",
      icon: <Moon className="h-6 w-6 text-calmi-lavender" />
    },
    {
      title: "Mindful Listening",
      description: "Focus on ambient sounds to center your attention",
      duration: "5 min",
      icon: <Music className="h-6 w-6 text-calmi-mint" />
    }
  ];
  
  const breathingExercises = [
    {
      title: "4-4-4 Box Breathing",
      description: "Inhale, hold, exhale, and hold for equal counts",
      component: <BreathingExercise />
    },
    {
      title: "4-7-8 Breathing",
      description: "Inhale for 4, hold for 7, exhale for 8 counts",
      component: <div className="p-6 text-center text-gray-500">Coming soon</div>
    },
    {
      title: "Alternate Nostril Breathing",
      description: "Balance your nervous system with this yogic technique",
      component: <div className="p-6 text-center text-gray-500">Coming soon</div>
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Mindfulness Practice</h1>
            <p className="text-gray-600">
              Reduce stress and improve focus with guided exercises.
            </p>
          </div>
          
          <Tabs defaultValue="breathing" className="mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="breathing" className="text-sm sm:text-base">
                <Wind className="h-4 w-4 mr-2" />
                Breathing Exercises
              </TabsTrigger>
              <TabsTrigger value="meditation" className="text-sm sm:text-base">
                <Moon className="h-4 w-4 mr-2" />
                Meditation
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="breathing" className="mt-6">
              <div className="space-y-6">
                {breathingExercises.map((exercise, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
                    <p className="text-gray-600 mb-4">{exercise.description}</p>
                    {exercise.component}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="meditation" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {meditationExercises.map((exercise, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">{exercise.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{exercise.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{exercise.description}</p>
                          <div className="text-xs text-calmi-blue font-medium">
                            {exercise.duration}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 p-6 calmi-card text-center">
                <p className="text-gray-600">
                  Our guided meditations are coming soon. Check back for updates!
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="calmi-card">
            <h2 className="text-xl font-semibold mb-4">Benefits of Mindfulness</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block bg-calmi-blue w-2 h-2 rounded-full mr-3 mt-1.5"></span>
                <span>Reduces stress and anxiety</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-calmi-lavender w-2 h-2 rounded-full mr-3 mt-1.5"></span>
                <span>Improves focus and concentration</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-calmi-mint w-2 h-2 rounded-full mr-3 mt-1.5"></span>
                <span>Enhances self-awareness</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-calmi-softPink w-2 h-2 rounded-full mr-3 mt-1.5"></span>
                <span>Promotes better sleep</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-calmi-cream w-2 h-2 rounded-full mr-3 mt-1.5"></span>
                <span>Reduces rumination and negative thinking</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mindfulness;
