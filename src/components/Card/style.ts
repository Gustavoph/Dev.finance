import styled from 'styled-components';

interface BoxProps {
  area: string;
  color?: string | 'white';
}

interface ColorProps {
  color?: string | 'white';
}

export const Container = styled.div`
  width: 100%;
  margin-top: -10rem;
  height: 13.6rem;
  display: grid;
  grid-template-columns: 1fr 32% 1fr;
  grid-template-rows: 1fr;
  gap: 3%;
  grid-template-areas: "earnings spending total";
  justify-items: space-between;

  @media(max-width: 900px) {
    margin-top: -11rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 3%;
    grid-template-areas: "earnings"
    "spending" 
    "total";
    gap: 3%;
  }
`;


export const Box = styled.div<BoxProps>`
  width: 100%;
  padding: 3rem;
  height: 13.6rem;
  border-radius: 5px;
  grid-area: ${(props) => props.area};
  background-color: ${(props) => props.color === 'green' ? '#49AA26' : '#FFFFFF' };
`;

export const Value = styled.h1<ColorProps>`
  font-size: 3.6rem;
  font-weight: 400;
  color: ${(props) => props.color === 'title' ? '#363F5F' : '#FFFFFF' };
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Paragraph = styled.p<ColorProps>`
  font-size: 1.6rem;
  color: ${(props) => props.color === 'title' ? '#363F5F' : '#FFFFFF' };
`;