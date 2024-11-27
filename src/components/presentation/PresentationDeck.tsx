"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PRESENTATION_SLIDES } from '@/constants/presentation';
import { SlideNavigation } from './SlideNavigation';
import PresentationSlide from './PresentationSlide';

const PresentationDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PRESENTATION_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full h-full">
      <Card className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 text-white backdrop-blur-sm border-gray-700/50 shadow-2xl">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={PRESENTATION_SLIDES.length}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
          <PresentationSlide slide={PRESENTATION_SLIDES[currentSlide]} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PresentationDeck;