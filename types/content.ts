export interface HeroBlock {
  type: 'hero';
  title: string;
  titleAccent?: string;
  accentColor?: string;
  description: string;
}

export interface GridBlock {
  type: 'grid';
  columns: 1 | 2 | 3 | 4;
  title?: string;
  titleAccent?: string;
  accentColor?: string;
  description?: string;
  items: Array<{
    title: string;
    titleAccent?: string;
    accentColor?: string;
    subtitle?: string;
    description: string;
    icon?: string;
    background?: string;
  }>;
}

export interface ActionBlock {
  type: 'action';
  theme?: string;
  accent?: string;
  image?: string;
  title: string;
  titleAccent?: string;
  description: string;
}

export type ContentBlock = HeroBlock | GridBlock | ActionBlock;

export interface PageContent {
  blocks: ContentBlock[];
}
