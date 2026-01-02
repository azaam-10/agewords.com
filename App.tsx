
import React, { useState } from 'react';
import MinePage from './pages/MinePage';
import NavigationBar from './components/NavigationBar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');

  // Simple conditional rendering for tabs
  const renderContent = () => {
    switch (activeTab) {
      case 'Mine':
        return <MinePage />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-xl font-semibold text-gray-400 uppercase tracking-widest">{activeTab} Page</h1>
            <p className="text-gray-400 mt-2">Content coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-white shadow-xl relative overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderContent()}
      </main>
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
