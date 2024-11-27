
export enum ICON_TYPES {
  FLASK = 'FLASK',
  MICROSCOPE = 'MICROSCOPE',
  CLIPBOARD = 'CLIPBOARD',
  BINARY = 'BINARY',
  SHIELD = 'SHIELD',
  CHART = 'CHART',
  FACTORY = 'FACTORY',
  DATABASE = 'DATABASE'
}

export type Slide = {
  title: string;
  subtitle: string;
  iconType: ICON_TYPES;
  points: string[];
};