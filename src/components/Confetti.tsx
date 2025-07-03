import React, { useEffect, useState } from 'react';
import { useCelebration } from '../context/CelebrationContext';

const Confetti: React.FC = () => {
  const { isCelebrationMode } = useCelebration();
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    rotation: number;
    speed: number;
  }>>([]);

  useEffect(() => {
    if (!isCelebrationMode) {
      setParticles([]);
      return;
    }

    // Create initial particles
    const colors = ['#FF5252', '#FFD740', '#64FFDA', '#448AFF', '#B388FF', '#FF80AB'];
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 100,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      speed: Math.random() * 3 + 1
    }));
    
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Move particle down
          const y = particle.y + particle.speed;
          
          // Reset particle if it's off screen
          if (y > window.innerHeight) {
            return {
              ...particle,
              y: -20,
              x: Math.random() * window.innerWidth,
              rotation: Math.random() * 360
            };
          }
          
          return {
            ...particle,
            y,
            rotation: particle.rotation + 1
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [isCelebrationMode]);

  if (!isCelebrationMode || particles.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            opacity: 0.7
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;