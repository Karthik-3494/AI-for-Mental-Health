
import Navbar from '@/components/Navbar';
import JournalEditor from '@/components/JournalEditor';

const Journal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Your Journal</h1>
            <p className="text-gray-600">
              Express your thoughts and feelings. Our AI provides insights to help you understand your emotions.
            </p>
          </div>
          
          <JournalEditor />
        </div>
      </main>
    </div>
  );
};

export default Journal;
