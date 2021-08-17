import React from "react";
import { Box, Container, Value, Title, Paragraph } from "./style";
import ImgEntradas from "../../assets/entradas.png";
import ImgSaidas from "../../assets/saidas.png";
import ImgTotal from "../../assets/total.png";

const Card: React.FC = () => (
  <Container>
    <Box area="earnings" color="white">
      <Title>
        <Paragraph color="title">Entradas</Paragraph>
        <img src={ImgEntradas} alt="" />
      </Title>
      <Value color="title">R$ 1.259,00</Value>{" "}
    </Box>
    <Box area="spending" color="white">
      <Title>
        <Paragraph color="title">Saídas</Paragraph>
        <img src={ImgSaidas} alt="" />
      </Title>
      <Value color="title">R$ 1.259,00</Value>
    </Box>
    <Box area="total" color="green">
      <Title>
        <Paragraph>Total</Paragraph>
        <img src={ImgTotal} alt="" />
      </Title>
      <Value>R$ 0</Value>
    </Box>
  </Container>
);

export default Card;
