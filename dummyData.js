export const posts = [
  {
    id: 1,
    slug: 'post-title1',
    title: 'Post Title',
    excerpt: 'This is an excerpt for the post',
    image: '/images/coding-event.jpg',
    date: new Date().toLocaleDateString('en-us', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  },
  {
    id: 2,
    slug: 'post-title2',
    title: 'Post Title2',
    excerpt: 'This is an excerpt for the post',
    image: '/images/code-editor.jpg',
    date: new Date().toLocaleDateString('en-us', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  },
  {
    id: 3,
    slug: 'post-title3',
    title: 'Post Title3',
    excerpt: 'This is an excerpt for the post',
    image: '/images/code.jpg',
    date: new Date().toLocaleDateString('en-us', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  },
]