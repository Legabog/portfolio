export interface Props {
  caruselType: 'left' | 'right';
  words: { id: string; text: string }[];
  customStyles?: string;
}
