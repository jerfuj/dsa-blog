const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const categoryFolders = fs.readdirSync(postsDirectory);
  const allPostsData = [];
  categoryFolders.forEach((folder) => {
    const posts = fs.readdirSync(path.join(postsDirectory, folder));
    const fileData = posts.map((post) => {
      const postContent = fs.readFileSync(path.join(postsDirectory, folder, post), 'utf8');
      const matterRes = matter(postContent);
      const id = post.replace(/\.md$/, '');
      return {
        id,
        title: matterRes.data.title,
        category: matterRes.data.category,
      };
    });
    allPostsData.push(...fileData);
  });
  return JSON.stringify(allPostsData);
};

const fileContents = `export const posts = ${getPosts()}`;

try {
  fs.readdirSync('cache');
} catch (e) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', fileContents, (err) => {
  if (err) return console.log(err);
  console.log('posts cached');
});
