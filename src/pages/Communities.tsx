
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Calendar, Info } from 'lucide-react';

const Communities = () => {
  // Placeholder community meetups data
  const communities = [
    {
      name: "Anxiety Support Group",
      location: "Community Center, Downtown",
      distance: "2.3 miles away",
      nextMeeting: "Tuesday, 6:00 PM",
      attendees: 12,
      description: "A supportive environment to discuss anxiety management strategies."
    },
    {
      name: "Mindfulness Meditation",
      location: "Peaceful Gardens Park",
      distance: "4.1 miles away",
      nextMeeting: "Saturday, 9:00 AM",
      attendees: 8,
      description: "Group meditation sessions followed by discussion."
    },
    {
      name: "Depression Recovery",
      location: "Health & Wellness Center",
      distance: "1.7 miles away",
      nextMeeting: "Thursday, 7:00 PM",
      attendees: 15,
      description: "Support group for those dealing with depression."
    },
    {
      name: "Young Adults Mental Health",
      location: "University Community Room",
      distance: "3.5 miles away",
      nextMeeting: "Wednesday, 5:30 PM",
      attendees: 20,
      description: "For ages 18-30 to discuss mental health challenges unique to young adults."
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Community Support Groups
            </h1>
            <p className="text-gray-600">
              Find peer support groups and mental health community meetups near you.
            </p>
          </div>
          
          <div className="calmi-card mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    id="location"
                    placeholder="Enter your city or zip code" 
                    className="pl-10 calmi-input"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Distance
                </label>
                <select className="calmi-input">
                  <option>5 miles</option>
                  <option>10 miles</option>
                  <option>25 miles</option>
                  <option>50 miles</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="calmi-button w-full md:w-auto">
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Nearby Groups</h2>
            <div className="text-sm text-gray-500">
              <Info className="h-4 w-4 inline mr-1" />
              Location services coming soon
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            {communities.map((community, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{community.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{community.location} • </span>
                        <span className="text-calmi-blue ml-1">{community.distance}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{community.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{community.nextMeeting}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{community.attendees} members</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button variant="outline" className="border-calmi-blue text-calmi-blue hover:bg-calmi-lightBlue hover:bg-opacity-10">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-calmi-lavender bg-opacity-20 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Can't find a group near you?</h3>
            <p className="text-gray-600 mb-4">
              Start your own community support group and connect with others.
            </p>
            <Button className="bg-calmi-lavender text-gray-800 hover:bg-calmi-lavender/90">
              Create a Group
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Communities;
