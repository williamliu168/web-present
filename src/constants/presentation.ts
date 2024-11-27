import { ICON_TYPES, Slide } from '@/types/presentation';

const FALLBACK_PASSWORD = '1234512345';

const getPassword = () => {
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_PRESENTATION_PASSWORD || FALLBACK_PASSWORD;
  }
  return FALLBACK_PASSWORD;
};

export const AUTH_CONFIG = {
  PASSWORD: getPassword(),
  VIDEO_PATH: '/background-video.mp4'
} as const;

export const PRESENTATION_SLIDES: Slide[] = [
  {
    title: "Drug Discovery Acceleration",
    subtitle: "AI-Powered Molecular Analysis",
    iconType: ICON_TYPES.FLASK,
    points: [
      "Advanced molecular docking simulations",
      "Protein-ligand interaction prediction",
      "Drug candidate screening automation"
    ]
  },
  {
    title: "Clinical Trial Management",
    subtitle: "Streamlined Trial Operations",
    iconType: ICON_TYPES.CLIPBOARD,
    points: [
      "Patient recruitment optimization",
      "Real-time trial data monitoring",
      "Automated adverse event reporting"
    ]
  },
  {
    title: "Laboratory Automation",
    subtitle: "Smart Lab Solutions",
    iconType: ICON_TYPES.MICROSCOPE,
    points: [
      "Automated sample analysis",
      "Instrument integration platform",
      "Electronic lab notebook system"
    ]
  },
  {
    title: "Quality Control Analytics",
    subtitle: "Real-time Quality Assurance",
    iconType: ICON_TYPES.CHART,
    points: [
      "Batch quality prediction models",
      "Contamination detection AI",
      "Quality metrics dashboard"
    ]
  },
  {
    title: "Regulatory Compliance",
    subtitle: "GxP Digital Solutions",
    iconType: ICON_TYPES.SHIELD,
    points: [
      "21 CFR Part 11 compliance",
      "Electronic batch record system",
      "Automated compliance reporting"
    ]
  },
  {
    title: "Manufacturing Intelligence",
    subtitle: "Smart Production Systems",
    iconType: ICON_TYPES.FACTORY,
    points: [
      "Process analytical technology (PAT)",
      "Real-time release testing",
      "Continuous process verification"
    ]
  },
  {
    title: "Formulation Optimization",
    subtitle: "Advanced Drug Development",
    iconType: ICON_TYPES.BINARY,
    points: [
      "ML-driven formulation design",
      "Stability prediction models",
      "Bioavailability optimization"
    ]
  },
  {
    title: "Data Management",
    subtitle: "Secure Pharma Platform",
    iconType: ICON_TYPES.DATABASE,
    points: [
      "Centralized data repository",
      "Secure audit trail system",
      "Regulatory data archival"
    ]
  }
];
