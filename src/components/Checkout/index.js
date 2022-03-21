import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonFooter, Container, DivCustomer, Form, Header } from "../Form/style";
import { DivMain, DivTitle, PaymentData, TableItem, DivInput, Row } from "./style";
import InputMask from 'react-input-mask';
import toast from "react-hot-toast";

function Checkout() {

  const location = useLocation();
  const navigate = useNavigate();
  const [year, setYear] = useState([]);
  const [payload, setPayload] = useState({
    name: '',
    amount: 0,
    taxpayer: '',
    number: '',
    cvv: '',
    exp_month: '01',
    exp_year: '',
    react: 0,
    vue: 0,
    angular: 0,
    unity: 0,
    valueUnity: 0,
    note: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0)
    GetYear()
  }, [])

  useEffect(() => {
    if (location.state) {
      const detail = location.state;

      setPayload({
        ...payload,
        amount: detail.full,
        unity: detail.unity,
        valueUnity: detail.valueUnity,
        react: detail.react === true ? detail.unity : 0,
        vue: detail.vue === true ? detail.unity : 0,
        angular: detail.angular === true ? detail.unity : 0,
        note: detail.note
      })
    }
  }, [])

  function handlePayload(label, value) {
    setPayload({ ...payload, [label]: value })
  }

  function GetYear() {
    const Year = new Date().getFullYear()
    const ArrayYear = [Year]
    for (var i = 1; i < 15; i++) {
      const newYear = Year + i
      ArrayYear.push(newYear)
    }
    setYear(ArrayYear)
  }

  function decimalToReais(value) {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function Validation(){
    if(payload.name === ''){
      toast.error('O campo nome do titular do cartão precisa ser preenchido')
    } else if(payload.number === ''){
      toast.error('O campo número do cartão precisa ser preenchido.')
    } else if(payload.exp_month === ''){
      toast.error('O campo mês precisa ser preenchido.')
    } else if(payload.exp_year === '' || payload.exp_year === 'Selecione'){
      toast.error('O campo ano precisa ser preenchido.')
    } else if(payload.cvv === ''){
      toast.error('O campo código de segurança precisa ser preenchido.')
    } else {
      return true;
    }
  }

  function handlePayment(event){
    if(event){
      event.preventDefault();
    }
    if(Validation()){
      toast.success('Pagamento efetuado com sucesso.')
      navigate('/')
    }
  }

  return (
    <Container>
      <Header>
        <DivCustomer>
          <DivTitle>
            <h2><span>Checkout</span></h2>
          </DivTitle>
        </DivCustomer>
      </Header>
      <DivMain>
        <Form onSubmit={handlePayment}>
          <label className="bold">Descrição do pedido:</label>
          <DivCustomer style={{width: '90%'}}>

            <TableItem>
              <tr>
                <th>Adesivo</th>
                <th>Qtd</th>
                <th>UN</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>React</td>
                <td>{payload.react}</td>
                <td>{decimalToReais(payload.valueUnity)}</td>
                <td>{payload.react !== 0 ? decimalToReais(payload.valueUnity * payload.unity) : decimalToReais(0)}</td>
              </tr>
              <tr>
                <td>Vue</td>
                <td>{payload.vue}</td>
                <td>{decimalToReais(payload.valueUnity)}</td>
                <td>{payload.vue !== 0 ? decimalToReais(payload.valueUnity * payload.unity) : decimalToReais(0)}</td>
              </tr>
              <tr>
                <td>Angular</td>
                <td>{payload.angular}</td>
                <td>{decimalToReais(payload.valueUnity)}</td>
                <td>{payload.angular !== 0 ? decimalToReais(payload.valueUnity * payload.unity) : decimalToReais(0)}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{decimalToReais(payload.amount)}</td>
              </tr>
            </TableItem>
            <PaymentData>
              <Row>
                <DivInput long>
                  <label htmlFor="name">Nome do titular do cartão</label>
                  <input
                    id="name"
                    type="text"
                    value={payload.name}
                    onChange={(e) => handlePayload('name', e.target.value)}
                  />
                </DivInput>
              </Row>
              <Row between>
                <DivInput litle>
                  <label htmlFor="taxpayer">CPF</label>
                  <InputMask
                    mask="999999999-99"
                    value={payload.taxpayer}
                    onChange={(e) => handlePayload('taxpayer', e.target.value)}
                  />
                </DivInput>
                <DivInput>
                  <label htmlFor="numero_cartao">Número do Cartão</label>
                  <InputMask
                    id="numero_cartao"
                    mask="9999 9999 9999 9999"
                    onChange={(e) => handlePayload('number', e.target.value.replaceAll(' ', ''))}
                  />
                </DivInput>
              </Row>
              <Row between>
                <DivInput litle>
                  <label htmlFor="mês">Mês</label>
                  <select
                    id="mês"
                    className="select-card"
                    onChange={(e) => handlePayload('exp_month', e.target.value)}
                  >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </DivInput>
                <DivInput litle>
                  <label htmlFor="ano">Ano</label>
                  <select
                    id="ano"
                    className="select-card"
                    onChange={(e) => handlePayload('exp_year', e.target.value)}
                  >
                    <option>Selecione</option>
                    {year ? year.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))
                      : ''}
                  </select>
                </DivInput>
              </Row>
              <Row between>
                <DivInput litle>
                  <label htmlFor="cod-seguranca">Cód. Segurança</label>
                  <input
                    id="cod-seguranca"
                    type="number"
                    onChange={(e) => handlePayload('cvv', e.target.value)}
                  />
                </DivInput>
                <ButtonFooter type='button' onClick={() => handlePayment()}>PAGAR</ButtonFooter>
              </Row>
            </PaymentData>
          </DivCustomer>


        </Form>
      </DivMain>
    </Container>
  )
}

export default Checkout;
