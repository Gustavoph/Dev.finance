import React from "react";

import { Container, Main, Header, Title } from './style';
import Card from '../components/Card';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
    <Title >Dev.finance</Title>
    </Header>
    <Main>
      <Card></Card>
    </Main>
  </Container>
);

export default Dashboard;