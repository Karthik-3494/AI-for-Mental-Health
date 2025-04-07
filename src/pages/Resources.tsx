
import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Headphones, Video, Star } from 'lucide-react';

const Resources = () => {
  const books = [
    {
      title: "The Anxiety and Phobia Workbook",
      author: "Edmund J. Bourne",
      description: "A comprehensive guide for managing anxiety and phobias.",
      rating: 4.5
    },
    {
      title: "Feeling Good: The New Mood Therapy",
      author: "David D. Burns",
      description: "A guide to overcoming depression through cognitive techniques.",
      rating: 4.7
    },
    {
      title: "The Gifts of Imperfection",
      author: "Brené Brown",
      description: "Embracing who you are and letting go of perfectionism.",
      rating: 4.8
    }
  ];
  
  const podcasts = [
    {
      title: "The Mental Health Podcast",
      host: "Various Experts",
      description: "Weekly discussions on different mental health topics.",
      rating: 4.6
    },
    {
      title: "Meditation Minutes",
      host: "Sarah Johnson",
      description: "Short guided meditations for everyday mindfulness.",
      rating: 4.9
    },
    {
      title: "Psychology in Everyday Life",
      host: "Dr. Michael Reed",
      description: "Understanding psychological principles that affect our daily experiences.",
      rating: 4.4
    }
  ];
  
  const videos = [
    {
      title: "Understanding Anxiety",
      creator: "HealthMind Channel",
      description: "A comprehensive explanation of anxiety and its management.",
      duration: "15:42",
      rating: 4.7
    },
    {
      title: "5-Minute Calm",
      creator: "Mindful Living",
      description: "Quick breathing exercises for immediate stress relief.",
      duration: "5:10",
      rating: 4.8
    },
    {
      title: "CBT Techniques Explained",
      creator: "Therapy Insights",
      description: "Overview of cognitive behavioral therapy strategies.",
      duration: "22:15",
      rating: 4.5
    }
  ];
  
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-calmi-blue text-calmi-blue" />
        ))}
        {hasHalfStar && (
          <Star className="h-4 w-4 text-calmi-blue" style={{ clipPath: 'inset(0 50% 0 0)', fill: 'currentColor' }} />
        )}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
        ))}
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Mental Health Resources
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover helpful books, podcasts, and videos to support your mental wellbeing journey.
            </p>
          </div>
          
          <Tabs defaultValue="books" className="mb-10">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="books">
                <Book className="h-4 w-4 mr-2" />
                Books
              </TabsTrigger>
              <TabsTrigger value="podcasts">
                <Headphones className="h-4 w-4 mr-2" />
                Podcasts
              </TabsTrigger>
              <TabsTrigger value="videos">
                <Video className="h-4 w-4 mr-2" />
                Videos
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="books" className="mt-6">
              <div className="space-y-4">
                {books.map((book, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="bg-calmi-lightBlue rounded-md p-3 mr-4">
                          <Book className="h-6 w-6 text-calmi-blue" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{book.title}</h3>
                          <p className="text-calmi-blue">by {book.author}</p>
                          <p className="text-gray-600 text-sm my-1">{book.description}</p>
                          <div className="flex items-center mt-2">
                            {renderStars(book.rating)}
                            <span className="text-sm text-gray-500 ml-2">{book.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="podcasts" className="mt-6">
              <div className="space-y-4">
                {podcasts.map((podcast, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="bg-calmi-lavender rounded-md p-3 mr-4">
                          <Headphones className="h-6 w-6 text-calmi-lavender bg-white rounded-full p-1" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{podcast.title}</h3>
                          <p className="text-calmi-blue">Hosted by {podcast.host}</p>
                          <p className="text-gray-600 text-sm my-1">{podcast.description}</p>
                          <div className="flex items-center mt-2">
                            {renderStars(podcast.rating)}
                            <span className="text-sm text-gray-500 ml-2">{podcast.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-6">
              <div className="space-y-4">
                {videos.map((video, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="bg-calmi-mint rounded-md p-3 mr-4">
                          <Video className="h-6 w-6 text-calmi-mint bg-white rounded-full p-1" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{video.title}</h3>
                          <p className="text-calmi-blue">By {video.creator}</p>
                          <p className="text-gray-600 text-sm my-1">{video.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              {renderStars(video.rating)}
                              <span className="text-sm text-gray-500 ml-2">{video.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">{video.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="calmi-card text-center">
            <h2 className="text-xl font-semibold mb-4">Have a Resource to Share?</h2>
            <p className="text-gray-600 mb-4">
              If you've found a helpful book, podcast, or video that has supported your mental health journey, 
              we'd love to add it to our collection.
            </p>
            <button className="calmi-button">
              Suggest a Resource
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;
