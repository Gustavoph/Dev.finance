import React, { useContext } from "react";

import { Box, Container, Value, Title, Paragraph } from "./style";

import ImgEntradas from "../../assets/entradas.png";
import ImgSaidas from "../../assets/saidas.png";
import ImgTotal from "../../assets/total.png";

import { muda } from "../../context/GlobalContext/actions";
import { GlobalContext } from "../../context/GlobalContext";

const Card: React.FC = () => {
  const globalContext = useContext(GlobalContext);
  const {
    globalState: { earnings, spending, total },
    globalDispatch,
  } = globalContext;

  return (
    <Container>
      <Box area="earnings" color="white">
        <Title>
          <Paragraph color="title">Entradas</Paragraph>
          <img src={ImgEntradas} alt="" />
        </Title>
        <Value color="title">{earnings}</Value>{" "}
      </Box>
      <Box area="spending" color="white">
        <Title>
          <Paragraph color="title">Saídas</Paragraph>
          <img src={ImgSaidas} alt="" />
        </Title>
        <Value color="title">{spending}</Value>
      </Box>
      <Box area="total" color="green">
        <Title onClick={() => muda(globalDispatch)}>
          <Paragraph>Total</Paragraph>
          <img src={ImgTotal} alt="" />
        </Title>
        <Value>{total}</Value>
      </Box>
    </Container>
  );
};

export default Card;
