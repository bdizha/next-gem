import { ContentBlocks } from '@/components/ContentBlocks/ContentBlocks';
import { homeContent } from './content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Graphigem Digital',
  description: 'Step into the next era of brand engagement with virtual worlds and spatial branding experiences.',
};

export default function Home() {
  return <ContentBlocks blocks={homeContent.blocks} />;
}
