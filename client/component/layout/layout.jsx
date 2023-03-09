import styled from "styled-components";
import { Navigation } from "./navigation";

export const Layout = (props) => {
  return (
    <Wrapper>
      <Navigation />
      <MainWrapper>{props.children}</MainWrapper>
      <FooterWrapper>Next.js-DRF-BLOG</FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const MainWrapper = styled.div``;
const FooterWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 10px 20px;
`;
