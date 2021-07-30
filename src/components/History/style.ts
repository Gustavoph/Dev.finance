import styled from 'styled-components'; 
import RemoveImg from '../../assets/minus.svg';

interface DivProps  {
    field?: string,
    align?: string,
}

interface ContainerProps  {
    color?: string,
}

interface TypographProps {
    color?: string
}

export const Container = styled.div<ContainerProps>`
    display: grid;
    grid-template-columns: repeat(3, 1fr) 10%;
    height: 6.4rem;
    background-color: ${(props) => props.color};
    border-radius: .5rem;
    grid-template-areas: "description value date remove";
    margin-bottom: 0.8rem;
    padding: 0rem 2rem;
    @media(max-width: 900px) {
        margin-top: 10rem;
    }
`;

export const Div = styled.div<DivProps>`
    grid-area: ${(props) => props.field};
    font-size: 1.6rem;
    display: flex;
    justify-content: ${(props) => props.align ? props.align : 'center'};
    align-items: center;
`;

export const Typograph = styled.p<TypographProps>`
    color: ${(props) => props.color ? props.color : '#363F5F'};
`;

export const Button = styled.button`
    color: var(--title);
    margin-top: 3.2rem;
    padding-left: 2rem;
    background-color: transparent;

    &:hover {
        color: var(--green);
    }
`;

export const ButtonRemove = styled.button`
    grid-area: remove;
    background: url(${RemoveImg}) transparent no-repeat center center;
    cursor: pointer;
`;