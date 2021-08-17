import React, { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { addValue } from "../../context/GlobalContext/actions";

import { Container, Card } from "./style";

import { Input, ButtonCancel, ButtonSave, Title } from "./style";

interface ModalProps {
  onClose: (props: boolean) => void;
  id?: string;
}

interface TransationProps {
  description: string;
  value: number;
  date: string;
}

const initialState = {
  description: "",
  value: 0,
  date: "",
};

const Modal = ({ onClose = () => {}, id = "modal" }: ModalProps) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) onClose(false);
  };

  const [data, setData] = useState<TransationProps>(initialState);

  const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    switch (e.target.id) {
      case "description":
        setData({ ...data, description: value });
        break;
      case "value":
        const newValue = parseInt(value);
        setData({ ...data, value: newValue });
        break;
      case "date":
        setData({ ...data, date: value });
        break;
    }
  };

  const onSalve = () => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Container id={id} onClick={handleOutsideClick}>
        <Card>
          <Title>Nova Transação</Title>
          <Input
            id="description"
            type="text"
            value={data?.description}
            placeholder="Descrição"
            onChange={(e) => changeDate(e)}
          />
          <Input
            id="value"
            type="number"
            value={data?.value}
            placeholder="0,00"
            onChange={(e) => changeDate(e)}
          />
          <Input
            id="date"
            type="date"
            value={data?.date}
            onChange={(e) => changeDate(e)}
          />
          <span>
            <ButtonCancel onClick={() => onClose(false)}>Cancelar</ButtonCancel>
            <ButtonSave onClick={() => onSalve()}>Salvar</ButtonSave>
          </span>
        </Card>
      </Container>
    </>
  );
};

export default Modal;
