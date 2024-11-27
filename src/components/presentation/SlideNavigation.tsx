import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlideNavigationProps = {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
};

export const SlideNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrev, 
  onNext 
}: SlideNavigationProps) => (
  <div className="flex items-center justify-between mb-4 sm:mb-8">
    <button 
      onClick={onPrev}
      className="p-1 sm:p-2 rounded-full hover:bg-gray-700/50 transition-colors"
    >
      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
    </button>
    <div className="text-xs sm:text-sm">
      {currentSlide + 1} / {totalSlides}
    </div>
    <button 
      onClick={onNext}
      className="p-1 sm:p-2 rounded-full hover:bg-gray-700/50 transition-colors"
    >
      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
    </button>
  </div>
);