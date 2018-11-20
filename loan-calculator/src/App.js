import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';


const Page = styled.div`
  display: flex; 
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  `

const Calculator = styled.div`
  width: 85%;
  border: 1px solid white;
  border-radius: 30px;
  height: auto;
  margin: 15px 0;
  display: flex; 
  justify-content: center; 
  flex-wrap: wrap;

`
const Input = styled.input`
  margin: 20px;
  padding: 5px;  
  width: 75%;
  height: 35px;
  border-radius: 12px;
  border: 1px solid white;
  font-size: 25px;
  color: white;
  background: none;
  ::placeholder{
    color: white; 
    opacity: .7; 
  }
`
const Output = styled.input`
  margin: 20px;
  padding: 5px;  
  width: 75%;
  height: 35px;
  border-radius: 12px;
  border:none;
  font-size: 25px;
  color: gray;
  background-color:rgba(0,0,0,0.2);
`
const Button = styled.div`
  width: 55%;
  display: flex; 
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: 35px;
  font-size: 25px;
  color: white; 
  cursor: pointer;
  &:hover{
    animation: colorchange 2s infinite;
    @keyframes colorchange{
      0% {
        background-color: none;
        color: white;
        }
      100% {
        background-color: white;
        color: black;
      }
    }
  }
`
class App extends Component {
  constructor(){
    super();
    this.state={
    loanAmount: 0,
    interest: 0,
    yearsToRepay: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    }
  }
  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  calculateResults = e =>{
    const loanAmount = this.state.input;
    const interest = this.state.input;
    const yearsToRepay = this.state.input;

    const monthlyPayment = this.state.output;
    const totalPayment = this.state.output;
    const totalInterest = this.state.output;

    
  }
  render() {
    return (

      <Page>
        <Calculator>
          <h1>Loan Calculator</h1>
          <Input
          type="number"
          name ="loanAmount"
          placeholder="Loan Amount"
          onChange={this.changeHandler}
          value = {this.state.loanAmount}
          />
          <Input
          type="number"
          name ="interest"
          placeholder="Interest"
          onChange={this.changeHandler}
          value = {this.state.interest}
          />
          <Input
          type="number"
          name="yearsToRepay"
          placeholder="Years to repay"
          onChange={this.changeHandler}
          value = {this.state.yearsToRepay}
          />
          <Button>Calculate</Button>
          <Output
          type="number"
          readonly="readonly"
          name = "monthlypayment"
          value = {this.state.monthlyPayment}
          />
          <Output
          type="number"
          readonly="readonly"
          name="totalPayment"
          value = {this.state.totalPayment}
          />
          <Output
          type="number"
          readonly="readonly"
          name="totalInterest"
          value = {this.state.totalInterest}
          />
        </Calculator>
      </Page>
    );
  }
}

export default App;
