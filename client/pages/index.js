import { Post } from "@/component/post/post";
import { getAllPostsData } from "@/lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <h4>BLOG POSTS</h4>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
};
