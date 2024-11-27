
import { Slide } from '@/types/presentation';
import SlideIcon from './SlideIcon';

interface PresentationSlideProps {
  slide: Slide;
}

const PresentationSlide: React.FC<PresentationSlideProps> = ({ slide }) => (
  <div className="flex flex-col items-center space-y-4 sm:space-y-6">
    <div className="transform transition-all duration-500 hover:scale-110">
      <SlideIcon iconType={slide.iconType} />
    </div>
    
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
      {slide.title}
    </h2>
    
    {slide.subtitle && (
      <p className="text-sm sm:text-base md:text-xl text-blue-300">
        {slide.subtitle}
      </p>
    )}

    <div className="w-full max-w-lg mt-4 sm:mt-8">
      {slide.points.map((point, index) => (
        <div 
          key={index}
          className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-6 bg-gray-800/50 p-2 sm:p-4 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:translate-x-2"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full" />
          <p className="text-sm sm:text-base md:text-lg">{point}</p>
        </div>
      ))}
    </div>
  </div>
);

export default PresentationSlide;
