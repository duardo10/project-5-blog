import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { Post, PostProps } from '.';

import mock from './mock';

export default {
  title: 'Post',
  component: Post,
  args: mock,
} as Meta<PostProps>;

export const Template: StoryFn<PostProps> = (args) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};