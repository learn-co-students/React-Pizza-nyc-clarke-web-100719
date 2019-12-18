import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    formData: {}
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(pizzas => this.setState({ pizzas }))
  }

  fillForm = (formData) => {
    this.setState({ formData })
  }

  changeForm = (e) => {
    let result = e.target.value;

    if (e.target.name === "vegetarian") {
      if (result === "Vegetarian") {
        result = true
      } else {
        result = false
      }
    }

    this.setState({ formData:{...this.state.formData, [e.target.name]: result} })
  }

  submitForm = () => {
    let updatedPizza = this.state.formData;
    let updatedArr = this.state.pizzas.map(pizza => pizza.id === updatedPizza.id ? updatedPizza : pizza )
    console.log(updatedArr)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm formData={this.state.formData} changeForm={this.changeForm} submitForm={this.submitForm} />
        <PizzaList pizzas={this.state.pizzas} fillForm={this.fillForm} />
      </Fragment>
    );
  }
}

export default App;
