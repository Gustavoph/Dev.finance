import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30% 70%;
  grid-template-areas: "header"
  "main"
`;

export const Main = styled.main`
  width: 85%;
  margin: 0 auto;
  grid-area: main;
`;

export const Header = styled.header`
  width: 100%;
  background-color: var(--dark-green);
  grid-area: header;
`;

export const Title = styled.h1`
  color: var(--white);
  text-align: center;
  padding-top: 2.9rem;
`;