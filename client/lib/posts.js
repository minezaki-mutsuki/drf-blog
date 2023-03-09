const SERVERURL = "http://127.0.0.1:8000/";

export const getAllPostsData = async () => {
  const res = await fetch(new URL(`${SERVERURL}api/post`));
  const posts = res.json();
  return posts;
};

export const getAllPostsId = async () => {
  const res = await fetch(new URL(`${SERVERURL}api/post`));
  const posts = res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

export const getPostData = async (id) => {
  const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`));
  const posts = res.json();
  return posts;
};
