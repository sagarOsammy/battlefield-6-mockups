const GameLogo = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <h1 className="font-military font-black text-6xl tracking-[0.3em] text-foreground text-shadow-strong">
        BATTLEFIELD
        <span className="block text-4xl tracking-[0.5em] text-battlefield-orange mt-2">
          6
        </span>
      </h1>
    </div>
  );
};

export default GameLogo;