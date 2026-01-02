
import React from 'react';
import { Home, Headphones, LayoutGrid, FileText, User } from 'lucide-react';

interface NavigationBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Home', icon: <Home size={24} strokeWidth={1.2} /> },
    { name: 'Service', icon: <Headphones size={24} strokeWidth={1.2} /> },
    { name: 'Menu', icon: <LayoutGrid size={24} strokeWidth={1.2} /> },
    { name: 'Record', icon: <FileText size={24} strokeWidth={1.2} /> },
    { name: 'Mine', icon: <User size={24} strokeWidth={1.2} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-[#F0F0F0] flex justify-around items-center z-50 h-[64px]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col items-center justify-center w-[20%] gap-0.5 transition-all ${
              isActive ? 'text-[#333]' : 'text-[#A0A0A0]'
            }`}
          >
            <div className={`${isActive ? 'opacity-100' : 'opacity-70'}`}>
              {tab.icon}
            </div>
            <span className={`text-[10px] font-normal ${isActive ? 'text-[#333]' : 'text-[#A0A0A0]'}`}>
              {tab.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default NavigationBar;
