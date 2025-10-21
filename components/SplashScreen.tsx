
import React from 'react';
import { AppLogo } from '../constants/icons';

interface SplashScreenProps {
  isFading: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isFading }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy text-white transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="animate-pulse-subtle">
        <AppLogo />
      </div>
      <h1 className="mt-4 text-3xl font-bold text-white animate-fade-in">
        7k Constitution
      </h1>
    </div>
  );
};

export default SplashScreen;
