import React, { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { addValue } from "../../context/GlobalContext/actions";

import { Container, Card } from "./style";

import { Input, ButtonCancel, ButtonSave, Title } from "./style";

interface ModalProps {
  onClose: (props: boolean) => void;
  id?: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose = () => {},
  id = "modal",
}: ModalProps) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) onClose(false);
  };

  const [description, setDescription] = useState<string | undefined>("");
  const [value, setValue] = useState<string | undefined>("");
  const [date, setDate] = useState<string | undefined>("");

  const globalContext = useContext(GlobalContext);
  const { globalDispatch } = globalContext;

  const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value.toString();
    setDate(date);
  };

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString();
    setValue(value);
  };

  const addNewValue = (): void => {
    const newValue = {
      description: description,
      value: value,
      date: date,
    };
    addValue(globalDispatch, newValue);
    onClose(false);
  };

  return (
    <>
      <Container id={id} onClick={handleOutsideClick}>
        <Card>
          <Title>Nova Transação</Title>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <Input
            type="number"
            value={value}
            onChange={(e) => changeValue(e)}
            placeholder="0,00"
          />
          <Input type="date" value={date} onChange={(e) => changeDate(e)} />
          <span>
            <ButtonCancel onClick={() => onClose(false)}>Cancelar</ButtonCancel>
            <ButtonSave onClick={() => addNewValue()}>Salvar</ButtonSave>
          </span>
        </Card>
      </Container>
    </>
  );
};

export default Modal;
