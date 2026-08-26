declare module FourthSection {
  type OverlappingType = 'pooling' | 'musicon' | 'linkify' | 'kod';
}
declare interface Theme {
  backgroundColor: string;
  cardBorder: string;
  color: string;
  colorSecondary: string;
  description: string;
  header: string;
  icon: {
    path: {
      fill: string;
    };
  };
}
