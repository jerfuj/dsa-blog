import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostFiles = (category) => {
  const categoryFilePath = path.join(postsDirectory, category);
  return fs.readdirSync(categoryFilePath);
};

export const getPostData = (category, filename) => {
  const slug = filename.replace(/\.md$/, '');

  const filePath = path.join(postsDirectory, category, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  return { slug, ...data, content };
};

export const getAllPosts = () => {
  const categories = fs.readdirSync(postsDirectory);

  const allPosts = [];
  categories.forEach((category) => (
    allPosts.push(...getPostFiles(category))
  ));

  return allPosts;
};
