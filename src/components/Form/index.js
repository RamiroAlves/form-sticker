import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { 
  Button, 
  ButtonFooter, 
  Container, 
  DivButton, 
  DivColumn, 
  DivCustomer, 
  DivFooter, 
  DivInput, 
  DivTitle, 
  DivValue, 
  Form, 
  Header 
} from './style';


function FormSticker() {

  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    react: false,
    vue: false,
    angular: false,
    unity: 0,
    valueUnity: 3,
    full: 0,
    note: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function HandlePayload(label, value){
    setPayload({ ...payload, [label]: value })
  }

  function increment(){
    let value = Object.values(payload).filter(item => item === true).length

    if(value){
      setPayload({ 
        ...payload, 
        unity: payload.unity+1, 
        full: payload.valueUnity*((payload.unity+1)*value)
      })
    }
  }

  function decrement(){
    let value = Object.values(payload).filter(item => item === true).length
    if(value){
      setPayload({ 
        ...payload, 
        unity: payload.unity-1, 
        full: payload.valueUnity*((payload.unity-1)*value)
      })

    }
  }

  function decimalToReais(value) {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function handleSend(event){
    if(event){
      event.preventDefault();
    }
    navigate('checkout', { state: payload })
  }

  return (
    <Container>
      <Header>
        <DivCustomer>
          <DivTitle>
            <h2>Formulário<br />para compra de<br /> <span>Pacote de adesivos</span></h2>
          </DivTitle>
        </DivCustomer>
      </Header>
        <Form onSubmit={handleSend}>
          <label className='bold'>Quais Adesivos:</label>
          <DivInput>
            <input 
              id='react'
              type="checkbox"
              onChange={() => setPayload({ ...payload, react: !payload.react})}
            />
            <label htmlFor='react'> React</label>
          </DivInput>
          <DivInput>
            <input 
              id='vue'
              type="checkbox"
              onChange={() => setPayload({ ...payload, vue: !payload.vue})}
            />
            <label htmlFor='vue'> Vue</label>
          </DivInput>
          <DivInput>
            <input 
              id='angular'
              type="checkbox"
              onChange={() => setPayload({ ...payload, angular: !payload.angular})}
            />
            <label htmlFor='angular'> Angular</label>
          </DivInput>
          <label className='bold'>Quantos adesivos de cada?</label>
          <DivButton>
            <Button 
              type='button' 
              disabled={payload.unity == 0 ? true : false}
              onClick={decrement}
              >&#8722;</Button>
            <input 
              type="number" 
              disabled
              value={payload.unity}
              />
            <Button type='button' onClick={increment}>&#43;</Button>
          </DivButton>
          <DivValue>
            <DivColumn>
              <label className='bold' htmlFor='unity'>Valor unitário:</label>
              <input id='unity' value={decimalToReais(payload.valueUnity)} disabled/>
            </DivColumn>
            <DivColumn>
              <label className='bold' htmlFor='full'>Valor total:</label>
              <input id='full' value={decimalToReais(payload.full)} disabled/>
            </DivColumn>
          </DivValue>
          <label className='bold' htmlFor='text'>Observações:</label>
          <textarea 
            id='text' 
            placeholder='Alguma dica? Recado?'
            onChange={(ev) => HandlePayload('note', ev.target.value)}
            />
          <DivFooter>
            <ButtonFooter margin type='button' onClick={() => handleSend()}>ENVIAR</ButtonFooter>
          </DivFooter>
        </Form>
    </Container>
  )
}

export default FormSticker;