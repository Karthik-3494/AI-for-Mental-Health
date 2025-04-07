
import WelcomeMessage from "@/components/WelcomeMessage";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageSquare, Wind, BookOpen, Users, Calendar, Bookmark } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "Talk to Calmi",
      description: "Have a supportive conversation with your AI companion.",
      icon: <MessageSquare className="h-10 w-10 text-calmi-blue" />,
      link: "/talk",
      color: "bg-calmi-lightBlue"
    },
    {
      title: "Mindfulness",
      description: "Practice meditation and breathing exercises.",
      icon: <Wind className="h-10 w-10 text-calmi-lavender" />,
      link: "/mindfulness",
      color: "bg-calmi-lavender"
    },
    {
      title: "Journal",
      description: "Track your thoughts and emotions with AI insights.",
      icon: <BookOpen className="h-10 w-10 text-calmi-mint" />,
      link: "/journal",
      color: "bg-calmi-mint"
    },
    {
      title: "Consult",
      description: "Connect with mental health professionals.",
      icon: <Calendar className="h-10 w-10 text-calmi-blue" />,
      link: "/consult",
      color: "bg-calmi-lightBlue"
    },
    {
      title: "Communities",
      description: "Find support groups and meetups near you.",
      icon: <Users className="h-10 w-10 text-calmi-lavender" />,
      link: "/communities",
      color: "bg-calmi-lavender"
    },
    {
      title: "Resources",
      description: "Discover books, podcasts, and videos for mental wellbeing.",
      icon: <Bookmark className="h-10 w-10 text-calmi-mint" />,
      link: "/resources",
      color: "bg-calmi-mint"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container px-4 mx-auto pb-12">
        <WelcomeMessage />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Your Personal Mental Health Companion
          </h2>
          <p className="text-gray-600">
            Calmi AI helps you take care of your mental wellbeing through AI-powered 
            support, mindfulness exercises, and personalized resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className={`h-2 ${feature.color}`}></div>
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link}>
                  <Button variant="outline" className="w-full border-calmi-gray hover:bg-gray-50">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="calmi-gradient rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-white text-opacity-90 mb-6">
            Take the first step towards better mental health with Calmi AI.
          </p>
          <Link to="/talk">
            <Button className="calmi-button bg-white text-calmi-blue hover:bg-gray-100">
              Talk to Calmi AI Now
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
