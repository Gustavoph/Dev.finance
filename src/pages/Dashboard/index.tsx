import React from "react";

import { Container, Main, Header, Title } from './style';

import Card from '../../components/Card';
import History from '../../components/History';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
    <Title >Dev.finance</Title>
    </Header>
    <Main>
      <Card></Card>
      <History></History>
    </Main>
  </Container>
);

export default Dashboard;