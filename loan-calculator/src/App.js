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
      50% {
        background-color: white;
        color: black;
      }
      100% {
        background-color: none;
        color: white;
      }
    }
  }
`
class App extends Component {
  constructor(){
    super();
    this.state={
    loanAmount: [],
    interest: [],
    yearsToRepay: [],
    monthlyPayment: [],
    totalPayment: [],
    totalInterest: [],
    }
  }
  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  calculateResults = e =>{
    e.preventDefault();

    const loanAmount = {loanAmount: this.state.loanAmount};
    const interest = {interest: this.state.interest};
    const yearsToRepay = {yearsToRepay: this.state.yearsToRepay};

    const principal = parseFloat(loanAmount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(yearsToRepay.value) * 12; 

    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
      let monthlyResult = this.state.monthlyPayment.join('');
      if(monthlyResult){
        monthlyResult = monthly.toFixed(2);

      }
      let paymentResult = this.state.totalPayment.join('');
      if(paymentResult){
        paymentResult = (monthly * calculatedPayment).toFixed(2);

      }
      let interestResult = this.state.totalInterest.join('');
      if(interestResult){
      interestResult = ((monthly * calculatedPayment) - principal).toFixed(2);
      }
      this.setState({
        monthlyPayment:[monthlyResult],
        totalInterest:[interestResult],
        totalPayment:[paymentResult],
      })
    }else{
       
    }
    this.setState({
    loanAmount, 
    interest,
    yearsToRepay,
    })
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
          <Button onClick ={this.calculateResults}>Calculate</Button>
          <Output
          type="number"
          readOnly="readOnly"
          name = "monthlypayment"
          value = {this.state.monthlyPayment}
          />
          <Output
          type="number"
          readOnly="readOnly"
          name="totalPayment"
          value = {this.state.totalPayment}
          />
          <Output
          type="number"
          readOnly="readOnly"
          name="totalInterest"
          value = {this.state.totalInterest}
          />
        </Calculator>
      </Page>
    );
  }
}

export default App;
