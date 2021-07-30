import React from "react";

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

    return (
        <>
            <Container id={id} onClick={handleOutsideClick}>
                <Card>
                    <Title>Nova Transação</Title>
                    <Input type="text" placeholder="Descrição"/>
                    <Input type="text" placeholder="0,00"/>
                    <Input type="date"/>
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