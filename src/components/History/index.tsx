import React, { useContext, useEffect, useState } from "react";

import { Container, Button, Div, Typograph, ButtonRemove } from "./style";
import Model from "../Modal";
import { GlobalContext } from "../../context/GlobalContext";
import { removeValue } from "../../context/GlobalContext/actions";

type accountProps = {
  description: string;
  value: number;
  date: string;
};

const History: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false);

  const globalContext = useContext(GlobalContext);
  const {
    globalState: { accounts },
    globalDispatch,
  } = globalContext;

  useEffect(() => {
    console.log("accounts: ", accounts);
  }, [accounts]);

  return (
    <>
      <Button onClick={() => setActiveModal(true)}>+ Adicionar </Button>
      <Container color="transparent">
        <Div field="description" align="left">
          <Typograph color="#969CB2">Descrição</Typograph>
        </Div>
        <Div field="value">
          <Typograph color="#969CB2">Valor</Typograph>
        </Div>
        <Div field="date" align="right">
          <Typograph color="#969CB2">Data</Typograph>
        </Div>
      </Container>
      {accounts &&
        accounts.map((account: accountProps) => {
          return (
            <Container color="white" key={account.description}>
              <Div field="description" align="left">
                <Typograph>{account.description}</Typograph>
              </Div>
              <Div field="value">
                <Typograph color="#E92929">{account.value}</Typograph>
              </Div>
              <Div field="date" align="right">
                <Typograph>{account.date}</Typograph>
              </Div>
              <ButtonRemove
                onClick={() => removeValue(globalDispatch, account.description)}
              />
            </Container>
          );
        })}

      {activeModal && <Model onClose={() => setActiveModal(false)} />}
    </>
  );
};

export default History;
