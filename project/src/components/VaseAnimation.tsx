import React, { useState, useEffect } from 'react';
import Sunflower from './Sunflower';
import { Heart } from 'lucide-react';

const VaseAnimation: React.FC = () => {
  const [isGrowing, setIsGrowing] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGrowing(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const sunflowers = [
    { position: 50, height: 85, delay: 0 },      // Center
    { position: 20, height: 75, delay: 300 },    // Far Left
    { position: 80, height: 75, delay: 300 },    // Far Right
    { position: 5, height: 65, delay: 600 },     // Outer Left
    { position: 95, height: 65, delay: 600 },    // Outer Right
    { position: 35, height: 80, delay: 900 },    // Mid Left
    { position: 65, height: 80, delay: 900 },    // Mid Right
  ];

  return (
    <div className="vase-container relative w-full max-w-md mx-auto h-[600px] flex items-end justify-center">
      {/* Background Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3000}ms`,
              transform: `scale(${0.3 + Math.random() * 0.3})`,
            }}
          />
        ))}
      </div>

      {/* Vase */}
      <div className="vase relative w-56 h-72">
        {/* Soft Glow */}
        <div className="absolute -inset-4 bg-gradient-to-t from-amber-200/10 to-transparent rounded-full animate-pulse"></div>
        
        {/* Vase neck */}
        <div className="absolute bottom-[75%] left-1/2 transform -translate-x-1/2 w-28 h-20
                      bg-gradient-to-b from-brown-600 to-brown-700
                      rounded-t-3xl z-10
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer"></div>
        
        {/* Vase body */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                      w-48 h-3/4 bg-gradient-to-r from-brown-700 via-brown-600 to-brown-700 
                      rounded-t-lg rounded-b-3xl overflow-hidden z-0
                      shadow-[0_0_30px_rgba(120,53,15,0.3)]
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer">
          
          {/* Delicate Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-repeat-y" 
                 style={{ 
                   backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(120,53,15,0.3) 25%, rgba(120,53,15,0.3) 26%, transparent 27%, transparent 74%, rgba(120,53,15,0.3) 75%, rgba(120,53,15,0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(120,53,15,0.3) 25%, rgba(120,53,15,0.3) 26%, transparent 27%, transparent 74%, rgba(120,53,15,0.3) 75%, rgba(120,53,15,0.3) 76%, transparent 77%, transparent)`,
                   backgroundSize: '30px 30px'
                 }}>
            </div>
          </div>
          
          {/* Sparkle Lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-full w-1 bg-brown-400/20 animate-energyFlow"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 200}ms`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Vase rim */}
        <div className="absolute bottom-[75%] left-1/2 transform -translate-x-1/2 w-32 h-3
                      bg-gradient-to-r from-brown-600 via-brown-500 to-brown-600
                      rounded-full z-20 shadow-[0_0_10px_rgba(120,53,15,0.5)]"></div>
        
        {/* Water surface */}
        <div className="absolute bottom-[75%] left-1/2 transform -translate-x-1/2 w-24 h-3
                      bg-gradient-to-r from-brown-500 via-brown-400 to-brown-500
                      rounded-full z-30 overflow-hidden animate-pulse
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer">
          <div className="w-full h-full bg-repeat" 
               style={{ 
                 backgroundImage: `radial-gradient(circle, rgba(120,53,15,0.3) 1px, transparent 1px)`,
                 backgroundSize: '4px 4px' 
               }}>
          </div>
        </div>
        
        {/* Sunflowers */}
        <div className="absolute bottom-[75%] left-1/2 transform -translate-x-1/2 w-[150%] h-96 z-30 overflow-visible">
          {sunflowers.map((sunflower, index) => (
            <Sunflower 
              key={index}
              position={sunflower.position}
              height={isGrowing ? sunflower.height : 0}
              delay={sunflower.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaseAnimation;