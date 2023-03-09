import { getAllPostsId, getPostData } from "@/lib/posts";
import { useRouter } from "next/router";

export const PostData = ({ post }) => {
  const router = useRouter();
  if (router.isFallback || !post) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.created_at}</p>
      </div>
      <p>{post.content}</p>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllPostsId();
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.id);
  return {
    props: { post },
    revalidate: 3,
  };
};
