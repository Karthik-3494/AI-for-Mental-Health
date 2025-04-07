
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Clock, Users, VideoIcon } from 'lucide-react';

const Consult = () => {
  const professionals = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Clinical Psychologist",
      description: "Specializing in anxiety, depression, and stress management.",
      availability: "Available next week",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Psychiatrist",
      description: "Experienced in medication management and therapy for various conditions.",
      availability: "Limited availability",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Lisa Rodríguez, LMFT",
      specialty: "Family Therapist",
      description: "Helping families and couples improve communication and relationships.",
      availability: "Available this week",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop&q=80"
    }
  ];
  
  const consultTypes = [
    {
      title: "One-on-One Session",
      description: "Private video consultation with a mental health professional.",
      icon: <VideoIcon className="h-8 w-8 text-calmi-blue" />
    },
    {
      title: "Group Therapy",
      description: "Join guided group sessions with others facing similar challenges.",
      icon: <Users className="h-8 w-8 text-calmi-lavender" />
    },
    {
      title: "Quick Check-in",
      description: "15-minute session to address specific concerns.",
      icon: <Clock className="h-8 w-8 text-calmi-mint" />
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Professional Consultation
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with licensed therapists, counselors, and psychiatrists through 
              secure video calls. Get the professional support you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {consultTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{type.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Available Professionals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {professionals.map((professional, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex">
                    <img 
                      src={professional.image} 
                      alt={professional.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{professional.name}</h3>
                      <p className="text-calmi-blue font-medium text-sm">
                        {professional.specialty}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {professional.description}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {professional.availability}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-calmi-blue bg-opacity-10 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Ready to Schedule?</h3>
            <p className="text-gray-600 mb-4">
              This feature is coming soon. We're working on integrating a secure booking system.
            </p>
            <Button className="calmi-button">
              <Calendar className="mr-2 h-4 w-4" />
              Join Waitlist
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Consult;
