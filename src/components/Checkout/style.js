import styled from "styled-components";

export const DivTitle = styled.div`
  color: var(--color-white);
  margin-top: 30px;
  width: 50%;
  
  h2{
    font-size: 2.5rem;
    text-align: start;
  }

  span{
    font-weight: 700;
  }

  @media(max-width: 545px){
    margin-top: 0;
  }

  @media(max-width: 375px){
    margin-top: -20px;
  }
`

export const DivMain = styled.div`
  background-color: var(--secondary-color);
  height: 100vh;
`

export const TableItem = styled.table`
  border-collapse: collapse;
  width: 40%;

  td, th {
    border: 2px solid var(--terciary-color);
    text-align: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: var(--terciary-color);
  }

  @media(max-width: 782px){
    width: 90%;
  }

  @media(max-width: 375px){
    width: 80vw;
  }

`

export const PaymentData = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media(max-width: 782px){
    margin-top: 40px;
    width: 90%;
  }
`

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.long ? '100%' : props.litle ? '40%' : '54%'};

  label{
    text-align: left;
  }

  input, select{
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    background-color: var(--terciary-color);
    font-size: 1.2rem;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 2px 10px;
    height: 30px;
    text-align: left; 
  }

  @media(max-width: 483px){
    width: ${props => props.long ? '100%' : props.litle ? '42%' : '57%'};
  }

  @media(max-width: 460px){
    width: ${props => props.long ? '100%' : props.litle ? '160px' : '220px'};
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.between ? 'space-between' : 'flex-start'};
  flex-wrap: wrap;
  width: 100%;
`