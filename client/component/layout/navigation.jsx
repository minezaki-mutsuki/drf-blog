import Link from "next/link";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <Wrapper>
      <Link href="/">
        <LinkText>Next.js-DRF-BLOG</LinkText>
      </Link>
      <Link href="/about">
        <LinkText>About</LinkText>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: gainsboro;
`;
const LinkText = styled.a`
  color: black;
  text-decoration: none;
`;
