
import { 
  FlaskRound, Microscope, ClipboardCheck, Binary, 
  ShieldCheck, BarChart3, Factory, Database,
  LucideIcon
} from 'lucide-react';
import { ICON_TYPES } from '@/types/presentation';

const ICON_MAP: Record<ICON_TYPES, LucideIcon> = {
  [ICON_TYPES.FLASK]: FlaskRound,
  [ICON_TYPES.MICROSCOPE]: Microscope,
  [ICON_TYPES.CLIPBOARD]: ClipboardCheck,
  [ICON_TYPES.BINARY]: Binary,
  [ICON_TYPES.SHIELD]: ShieldCheck,
  [ICON_TYPES.CHART]: BarChart3,
  [ICON_TYPES.FACTORY]: Factory,
  [ICON_TYPES.DATABASE]: Database,
};

const ICON_COLORS: Record<ICON_TYPES, string> = {
  [ICON_TYPES.FLASK]: 'text-blue-500',
  [ICON_TYPES.MICROSCOPE]: 'text-purple-500',
  [ICON_TYPES.CLIPBOARD]: 'text-green-500',
  [ICON_TYPES.BINARY]: 'text-pink-500',
  [ICON_TYPES.SHIELD]: 'text-red-500',
  [ICON_TYPES.CHART]: 'text-orange-500',
  [ICON_TYPES.FACTORY]: 'text-yellow-500',
  [ICON_TYPES.DATABASE]: 'text-cyan-500',
};

interface SlideIconProps {
  iconType: ICON_TYPES;
}

const SlideIcon: React.FC<SlideIconProps> = ({ iconType }) => {
  const Icon = ICON_MAP[iconType];
  const colorClass = ICON_COLORS[iconType];
  
  return <Icon className={`w-12 h-12 sm:w-16 sm:h-16 ${colorClass}`} />;
};

export default SlideIcon;