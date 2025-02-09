import { Metadata } from 'next';
import { ContentBlocks } from '../../components/ContentBlocks/ContentBlocks';
import { aboutContent } from './content';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'About Graphigem - Building Immersive Brand Experiences',
  description: 'Learn about Graphigem\'s mission to transform brands through virtual worlds and immersive experiences. Discover our story, values, and the team behind the innovation.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <ContentBlocks blocks={aboutContent.blocks} />
    </main>
  );
}
