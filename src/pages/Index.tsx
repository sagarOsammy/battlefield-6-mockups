import { useState } from 'react';
import TopNavigation from '@/components/battlefield/TopNavigation';
import GameModeNav from '@/components/battlefield/GameModeNav';
import GameLogo from '@/components/battlefield/GameLogo';
import battlefieldBg from '@/assets/battlefield-background.jpg';

const Index = () => {
  const [activeTab, setActiveTab] = useState('PLAY');
  const [activeMode, setActiveMode] = useState('CONQUEST');

  return (
    <div className="relative w-full h-screen overflow-hidden film-grain">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${battlefieldBg})` }}
      />
      
      {/* Cinematic Vignette and Glare */}
      <div className="absolute inset-0 battlefield-vignette" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
      
      {/* Central radial glare behind soldier */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-battlefield-warm-highlight/20 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Top Navigation */}
      <TopNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content Area */}
      <div className="absolute inset-0 pt-24 pb-24 flex">
        {/* Left Side Game Mode Navigation */}
        <div className="">
          <GameModeNav activeMode={activeMode} onModeChange={setActiveMode} />
        </div>
        
        {/* Center Hero Area - transparent to show background */}
        <div className="flex-1 relative">
          {/* Optional: Add subtle overlay if needed for readability */}
        </div>
        
        {/* Right side could be used for additional UI panels if needed */}
        <div className="w-1/6"></div>
      </div>
      
      {/* Game Logo */}
      <GameLogo />
      
      {/* Chromatic Aberration Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen">
        <div className="absolute inset-0 bg-red-500/5 transform translate-x-px" />
        <div className="absolute inset-0 bg-cyan-500/5 transform -translate-x-px" />
      </div>
    </div>
  );
};

export default Index;