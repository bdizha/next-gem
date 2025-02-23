export type BlockTheme = 
  | 'pinkPurple'
  | 'purpleBlue'
  | 'greyLight'
  | 'greenPurple'
  | 'yellowPink'
  | 'greyDark';

export type BlockItem = {
  title: string;
  description?: string;
  icon?: string;
  link?: string;
};

export type BaseBlock = {
  id: string;
  theme?: BlockTheme;
  title?: string;
  titleAccent?: string;
  description?: string;
};

export type MediaItem = {
  type: 'image' | 'video';
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  poster?: string; // For video thumbnails
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

export type HeroBlock = BaseBlock & {
  type: 'hero';
  media?: MediaItem;
};

export type GridBlock = BaseBlock & {
  type: 'grid';
  items: BlockItem[];
};

export type HeaderBlock = BaseBlock & {
  type: 'header';
  navigation?: {
    label: string;
    href: string;
  }[];
};

export type MediaBlock = BaseBlock & {
  type: 'media';
  items: MediaItem[];
  layout?: 'grid' | 'slider' | 'full';
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'auto';
};

export type FooterBlock = BaseBlock & {
  type: 'footer';
  links?: {
    label: string;
    href: string;
  }[];
};

export type Block = 
  | HeroBlock 
  | GridBlock 
  | HeaderBlock 
  | MediaBlock 
  | FooterBlock;

export type PageContent = {
  blocks: Block[];
};
