export type HeroBlock = {
  type: 'hero';
  titleAccent?: string;
  title?: string;
  accentColor?: string;
  description?: string;
  image?: string;
};

export type GridBlock = {
  type: 'grid';
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
  theme?: string;
  accent?: string;
  image?: string;
  title?: string;
  description?: string;
};

export type ContentBlock = HeroBlock | GridBlock | ActionBlock;

export type PageContent = {
  blocks: ContentBlock[];
};
