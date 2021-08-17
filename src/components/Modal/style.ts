import styled from 'styled-components'; 

interface InputProps {
    type?: string,
}

export const Container = styled.div`
    background-color: rgba(0 , 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 3;
    top: 0;
    left: 0;
`;

export const Card = styled.div`
    background-color: var(--background);
    border-radius: 10px;
    width: 56.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 34.3rem;
    color: black;
`;

export const Input = styled.input<InputProps>`
    width: 50rem;
    height: 4.2rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    padding: .8rem;
`;

export const ButtonSave = styled.button`
    width: 24rem;
    height: 4.2rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    background-color: var(--green);
    color: var(--white);
    margin-left: 2rem;
    cursor: pointer;
`;

export const ButtonCancel = styled.button`
    width: 24rem;
    height: 4.2rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    border: 0.2rem solid var(--red);
    color: var(--red);
    cursor: pointer;
`;


export const Title = styled.h1`
    margin-top: -2.5rem;
    margin-bottom: 2.5rem;
    font-size: 2.2rem;
`

