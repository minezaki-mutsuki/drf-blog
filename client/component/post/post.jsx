import Link from "next/link";
import styled from "styled-components";

export const Post = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}/`}>
      <Wrapper>
        <img width="150px" src={post.image} alt="post" />
        <h5>{post.title}</h5>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  background-color: gainsboro;
  border-radius: 10px;
  width: 300px;
  height: 200px;
`;
