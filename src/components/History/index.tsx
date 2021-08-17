import React, { useState } from "react";

import { Container, Button, Div, Typograph, ButtonRemove } from './style';
import Model from '../Modal';

const History: React.FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    return (
        <>
            <Button onClick={() => setActiveModal(true)}>+ Adicionar</Button>
            <Container color="transparent">
                <Div field="description" align="left">
                    <Typograph color="#969CB2">
                        Descrição
                    </Typograph>
                </Div>
                <Div field="value">
                    <Typograph color="#969CB2">
                        Valor
                    </Typograph>
                </Div>
                <Div field="date" align="right">
                    <Typograph color="#969CB2">
                        Data
                    </Typograph>
                </Div>
            </Container>
            <Container color="white">
                <Div field="description" align="left">
                    <Typograph>
                        Desenvolvimento de site
                    </Typograph>
                </Div>
                <Div field="value">
                    <Typograph color="#E92929">
                        -R$ 34,90
                    </Typograph>
                </Div>
                <Div field="date" align="right">
                    <Typograph>
                        29/08/2021
                    </Typograph>
                </Div>
                <ButtonRemove/>
            </Container>

            {activeModal && <Model onClose={() => setActiveModal(false)}/>}
        </>
    )
};

export default History;