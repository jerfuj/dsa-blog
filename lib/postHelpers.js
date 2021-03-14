import fs, { copyFileSync } from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostFiles = () => {
  return fs.readdirSync(postsDirectory);
}

export const getPostData = (filename) => {
  const slug = filename.replace(/\.md$/, '');

  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  return { slug, ...data, content };
}