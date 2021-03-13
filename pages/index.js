import RecentPosts from '../components/posts/RecentPosts';

import { posts } from '../dummyData';

export default function Home() {
  return (
    <RecentPosts posts={posts}/>
  )
}
