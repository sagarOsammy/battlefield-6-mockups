interface GameModeNavProps {
  activeMode: string;
  onModeChange: (mode: string) => void;
}

const GameModeNav = ({ activeMode, onModeChange }: GameModeNavProps) => {
  const modes = [
    'BREAKTHROUGH',
    'CONQUEST', 
    'DOMINATION',
    'ESCALATION',
    'RUSH'
  ];

  return (
    <div className="w-1/3 space-y-4 p-8">
      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => onModeChange(mode)}
          className={`
            w-full text-left p-6 battlefield-plate
            font-condensed font-bold text-2xl tracking-widest
            text-shadow-strong transition-all duration-300
            relative overflow-hidden group
            ${activeMode === mode 
              ? 'text-foreground' 
              : 'text-muted-foreground hover:text-foreground'
            }
          `}
        >
          {mode}
          {activeMode === mode && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-battlefield-orange to-battlefield-warm-highlight" />
          )}
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-battlefield-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      ))}
    </div>
  );
};

export default GameModeNav;