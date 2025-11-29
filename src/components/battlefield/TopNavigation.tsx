interface TopNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TopNavigation = ({ activeTab, onTabChange }: TopNavigationProps) => {
  const tabs = ['PARTY', 'PLAY', 'LOADOUTS', 'CHALLENGES', 'SETTINGS'];

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 p-6 battlefield-glass">
      <div className="flex justify-center space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              px-6 py-3 font-military font-bold text-lg tracking-wider
              transition-all duration-300 relative
              text-shadow-strong
              ${activeTab === tab 
                ? 'text-foreground battlefield-active' 
                : 'text-muted-foreground hover:text-foreground'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TopNavigation;