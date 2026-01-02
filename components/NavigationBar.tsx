
import React from 'react';
import { Home, Headphones, LayoutGrid, FileText, User } from 'lucide-react';

interface NavigationBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Home', icon: <Home size={22} strokeWidth={1.5} /> },
    { name: 'Service', icon: <Headphones size={22} strokeWidth={1.5} /> },
    { name: 'Menu', icon: <LayoutGrid size={22} strokeWidth={1.5} /> },
    { name: 'Record', icon: <FileText size={22} strokeWidth={1.5} /> },
    { name: 'Mine', icon: <User size={22} strokeWidth={1.5} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-100 flex justify-around items-center z-[90] h-[72px] px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]" dir="ltr">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col items-center justify-center w-[20%] gap-1.5 transition-all ${
              isActive ? 'text-[#333]' : 'text-[#9E9E9E]'
            }`}
          >
            <div className={`transition-opacity ${isActive ? 'opacity-100' : 'opacity-70'}`}>
              {tab.icon}
            </div>
            <span className={`text-[11px] font-medium tracking-tight ${isActive ? 'text-[#333]' : 'text-[#9E9E9E]'}`}>
              {tab.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default NavigationBar;
