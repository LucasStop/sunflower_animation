import React from 'react';
import VaseAnimation from './components/VaseAnimation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-blue-50 to-pink-50 flex flex-col items-center justify-center p-6 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 mb-8 text-center animate-pulse">
        Magical Sunflowers
      </h1>
      
      <div className="w-full max-w-2xl bg-white/40 backdrop-blur-sm rounded-3xl shadow-[0_0_50px_rgba(219,234,254,0.5)] p-8 flex flex-col items-center
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer relative overflow-hidden">
        <VaseAnimation />
        
        <p className="text-blue-600/80 mt-8 text-center text-lg animate-pulse">
          Watch them bloom with love ♥
        </p>
      </div>
    </div>
  );
}

export default App;