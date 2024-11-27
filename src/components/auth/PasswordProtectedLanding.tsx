'use client';

import React, { useState } from 'react';
import { AUTH_CONFIG } from '@/constants/presentation';
import VideoBackground from '../presentation/VideoBackground';
import PasswordCard from './PasswordCard';
import PresentationDeck from '../presentation/PresentationDeck';

const PasswordProtectedLanding: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === AUTH_CONFIG.PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <PresentationDeck />;
  }

  return (
    <div className="relative w-full h-full">
      <VideoBackground />
      <div className="relative z-10 w-full h-full">
        <PasswordCard
          onSubmit={handleSubmit}
          password={password}
          setPassword={setPassword}
          error={error}
        />
      </div>
    </div>
  );
};

export default PasswordProtectedLanding;