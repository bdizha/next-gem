import React from 'react';
import { ContentBlock } from '../../types/content';
import { Hero } from './Hero';
import { Grid } from './Grid';
import { Action } from '../Action/Action';

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'hero':
            return <Hero key={index} {...block} />;
          case 'grid':
            return <Grid key={index} {...block} />;
          case 'action':
            return (
              <Action
                key={index}
                theme={block.theme}
                accent={block.accent}
                image={block.image}
                title={
                  block.titleAccent ? (
                    <span>
                      {block.titleAccent} <span>{block.title}</span>
                    </span>
                  ) : (
                    block.title
                  )
                }
                subtitle={block.description}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
