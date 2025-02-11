export type HeroBlock = {
  type: 'hero';
  id: string;
  titleAccent?: string;
  title?: string;
  accentColor?: string;
  description?: string;
  image?: string;
};

export type GridBlock = {
  type: 'grid';
  id: string;
  title?: string;
  titleAccent?: string;
  accentColor?: string;
  description?: string;
  items?: Array<{
    title: string;
    description: string;
    icon: string;
    background?: string;
  }>;
};

export type ActionBlock = {
  type: 'action';
  id: string;
  theme?: string;
  accent?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export type SliderBlock = {
  type: 'slider';
  id: string;
  title?: string;
  titleAccent?: string;
  accentColor?: string;
  description?: string;
  items: {
    src: string;
    title: string;
    width?: number;
    height?: number;
  }[];
};

export type ContentBlock = HeroBlock | GridBlock | ActionBlock | SliderBlock;

export type Tab = {
  id: string;
  title: string;
  titleAccent?: string;
  accentColor?: string;
  content: ContentBlock[];
};

export type PageContent = {
  blocks: ContentBlock[];
  tabs?: Tab[];
};
