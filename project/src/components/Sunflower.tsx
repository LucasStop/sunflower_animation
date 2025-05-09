import React from 'react';

interface SunflowerProps {
  delay: number;
  position: number;
  height: number;
}

const Sunflower: React.FC<SunflowerProps> = ({ delay, position, height }) => {
  return (
    <div 
      className="absolute bottom-0 transform transition-all duration-[3000ms]"
      style={{ 
        left: `${position}%`, 
        height: `${height}%`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      {/* Stem */}
      <div 
        className="absolute bottom-0 left-1/2 w-3 bg-gradient-to-t from-green-600 to-green-400 origin-bottom animate-grow rounded-full
                   before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"
        style={{ 
          height: '100%', 
          transform: 'translateX(-50%)',
          animationDelay: `${delay}ms`
        }}
      >
        {/* Dew Drops */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-200/80 rounded-full animate-float shadow-lg"
              style={{
                left: `${Math.random() * 150 - 25}%`,
                top: `${20 + i * 30}%`,
                animationDelay: `${Math.random() * 2000}ms`
              }}
            />
          ))}
        </div>

        {/* Realistic Leaves */}
        <div className="absolute w-12 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-full rotate-45 left-3 top-1/4 origin-left animate-fadeIn
                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer
                       after:absolute after:inset-0 after:border-2 after:border-green-600/30 after:rounded-full"
          style={{ animationDelay: `${delay + 800}ms` }}></div>
        <div className="absolute w-12 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-full -rotate-45 -left-12 top-2/4 origin-right animate-fadeIn
                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer
                       after:absolute after:inset-0 after:border-2 after:border-green-600/30 after:rounded-full"
          style={{ animationDelay: `${delay + 1200}ms` }}></div>
      </div>

      {/* Flower Head */}
      <div 
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 animate-bloomIn"
        style={{ animationDelay: `${delay + 2000}ms` }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 animate-pulse-ring">
          <div className="w-full h-full rounded-full bg-yellow-200/10"></div>
        </div>

        {/* Petals */}
        <div className="absolute inset-0 animate-rotate">
          {Array.from({ length: 24 }).map((_, i) => (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 w-16 h-5 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 rounded-full origin-left
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer
                         after:absolute after:inset-0 after:border-[1px] after:border-yellow-400/30 after:rounded-full"
              style={{ 
                transform: `rotate(${i * 15}deg) translateX(0)`,
                boxShadow: '0 0 15px rgba(234, 179, 8, 0.2)'
              }}
            ></div>
          ))}
        </div>
        
        {/* Center */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full transform -translate-x-1/2 -translate-y-1/2 
                       flex items-center justify-center shadow-lg">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-800 to-amber-950 rounded-full flex items-center justify-center
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer">
            {/* Seed Pattern */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-[20%] flex justify-around items-center"
                  style={{ top: `${i * 20}%` }}
                >
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div
                      key={j}
                      className="w-1.5 h-1.5 rounded-full bg-amber-600"
                      style={{ transform: `translateX(${(j - 1) * 4}px)` }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sunflower;