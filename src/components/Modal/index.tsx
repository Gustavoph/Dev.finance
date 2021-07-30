import React, { ChangeEvent, useState } from "react";

import { Container, Card } from './style';

import { Input, ButtonCancel, ButtonSave, Title } from './style';

interface ModalProps {
    onClose: (props: boolean) => void,
    id?: string,
}

const Modal: React.FC<ModalProps> = ({ onClose = () => {}, id = 'modal' }:ModalProps) => {
    const handleOutsideClick = (e: any) => {
        if(e.target.id === id) onClose(false)
    }

    const [date, setDate] = useState<string | undefined>();

    const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
      const date = e.target.value.toString();
      console.log(typeof date);
      setDate(date);
    }

    return (
        <>
            <Container id={id} onClick={handleOutsideClick}>
                <Card>
                    <Title>Nova Transação</Title>
                    {`Data: ${date}`}
                    <Input type="text" placeholder="Descrição"/>
                    <Input type="text" placeholder="0,00"/>
                    <Input type="date" value={date} onChange={(e) => changeDate(e)}/>
                    <span>
                        <ButtonCancel onClick={() => onClose(false)}>
                            Cancelar
                        </ButtonCancel>
                        <ButtonSave>
                            Salvar
                        </ButtonSave>
                    </span>
                </Card>
            </Container>
        </>
    )
};

export default Modal;