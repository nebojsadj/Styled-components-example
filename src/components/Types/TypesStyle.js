import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
  background-color: #fff;
  min-height: 550px;
`;

export const BoxContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 4em;
  }
`;

export const Heading = styled.h2`
  padding-top: 2.5em;
  text-align: center;
  font-size: 2em;
`;

export const Paragraph = styled.p`
  font-size: 1.4em;
  text-align: center;
`;

export const Box = styled.div`
  flex: 50%;
  padding: 5em;
  display: flex;
  flex-direction: column;

  img {
    width: 30%;
    margin: 15px auto;
  }

  @media screen and (max-width: 1440px) {
    p {
      font-size: 1.3em;
    }
  }
  @media screen and (max-width: 1024px) {
    button {
      margin-bottom: 0;
    }
    p {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 5em;
    p {
      font-size: 1.4em;
    }
    img {
      margin-top: 5em;
    }
    button {
      margin-bottom: 30px;
    }
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.5em;
  padding: 0.5em 0.8em;
  margin: 30px auto;
  cursor: pointer;
  border: 2px solid;
  background-color: #c62828;
  color: #fff;

  &:hover {
    background-color: #a91a1a;
  }
`;
