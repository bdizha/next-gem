import { aboutContent } from '../content/about';
import { portfolioContent } from '../content/portfolio';
import { contactContent } from '../content/contact';
import { careersContent } from '../careers/content';
import { ContentBlocks } from '@/components/ContentBlocks/ContentBlocks';
import { Metadata } from 'next';

const contentMap = {
  about: aboutContent,
  portfolio: portfolioContent,
  contact: contactContent,
  careers: careersContent
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const content = contentMap[params.slug as keyof typeof contentMap];

  if (!content) {
    return {
      title: 'Not Found | Graphigem Digital'
    };
  }

  return {
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} | Graphigem Digital`
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const content = contentMap[params.slug as keyof typeof contentMap];

  if (!content) {
    return <div>Not Found</div>;
  }

  return <ContentBlocks blocks={content.blocks} />;
}
