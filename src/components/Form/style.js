import styled from 'styled-components'
import Image from '../../assets/background.png'

export const Container = styled.div`
  background-color: var(--secondary-color);
  height: auto;
  width: 100%;
`

export const Header = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 22vw;
  width: 100%;

`

export const DivCustomer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  padding-bottom: 30px;
  width: 80%;

  @media(max-width: 782px){
    flex-direction: column;
  }
`

export const DivTitle = styled.div`
  color: var(--color-white);
  width: 50%;
  
  h2{
    font-size: 1.8rem;
    font-weight: 400;
    text-align: start;
    
    @media(max-width: 668px){
      font-size: 1.5rem;
    }

    @media(max-width: 556px){
      font-size: 1.2rem;
    }

    @media(max-width: 445px){
      font-size: 1rem;
    }

    @media(max-width: 350px){
      margin: 4px;
    }
  }
  
  span{
    font-weight: 700;
  }

  @media(max-width: 371px){
    width: 60%;
  }

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  width: 100%;
  
  .bold{
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 10px;
    margin-left: 50px;

    @media(max-width: 436px){
      margin-left: 20px;
    }
  }

  textarea{
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    background-color: var(--terciary-color);
    margin-left: 50px;
    padding: 15px;
    height: 160px;
    width: 90% !important;

    @media(max-width: 850px){
      width: 80% !important;
    }

    @media(max-width: 436px){
      margin-left: 20px;
    }
  }

  @media(max-width: 375px){
    margin-left: 0;
  }
`

export const DivInput = styled.div`
  margin-left: 50px;

  @media(max-width: 436px){
      margin-left: 20px;
    }
`

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  input{
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    background-color: var(--terciary-color);
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 10px;
    height: 30px;
    width: 50px;
    text-align: center;
  }

  @media(max-width: 436px){
    margin-left: 20px;
  }
`

export const DivValue = styled.div`
  display: flex;
`

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;

  input{
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    background-color: var(--terciary-color);
    font-size: 1.5rem;
    font-weight: 600;
    height: 30px;
    margin-left: 50px;
    margin-right: 10px;
    width: 120px;
    text-align: center;

    @media(max-width: 436px){
      margin-left: 20px;
    }
  }

`

export const Button = styled.button`
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
  color: var(--color-white);
  cursor: pointer;
  font-size: 2rem;
  margin-right: 10px;
  max-height: 40px;
  padding-top: 0;
  width: 40px;
`

export const DivFooter = styled.div`
  background-color: var(--terciary-color);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
  height: 100px;
  width: 100%;
`

export const ButtonFooter = styled.button`
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
  color: var(--color-white);
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: ${props => props.margin ? '40px' : '10px'};
  padding: 10px;
  height: 50px;
  width: 150px;
`