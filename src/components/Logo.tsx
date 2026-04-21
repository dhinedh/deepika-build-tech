import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", showText = true, variant = 'color' }) => {
  // Using the Blue/Gold theme from the user's provided logo
  const brandBlue = "#0024ff"; // Bright vibrant blue as in image
  const brandGold = "#c5a059"; // Premium gold as in image
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-full aspect-square overflow-hidden rounded-full shadow-lg">
        <img 
          src="/assets/logo background blue.png" 
          alt="Deepika Builtech Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {showText && (
        <div className="hidden sm:flex flex-col">
          <span className="font-heading font-black text-xl tracking-tighter leading-none text-ink uppercase">
            DEEPIKA
          </span>
          <span className="font-heading font-black text-xl tracking-tighter leading-none text-amber uppercase">
            BUILTECH
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
