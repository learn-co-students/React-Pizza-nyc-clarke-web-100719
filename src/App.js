import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = "http://localhost:3000/pizzas";

class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {}
  }

  handleClick = (pizza) => {
    console.log(pizza)
    this.setState({
      selectedPizza: pizza
    })
  }

  handleChange = e => {
    let pizza = {...this.state.selectedPizza}
    pizza[e.target.name] = e.target.value
    this.setState({
      selectedPizza: pizza
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(API + `/${this.state.selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.selectedPizza)
    })
    .then(resp => resp.json())
    .then(pizza => {
      fetch(API)
      .then(resp=> resp.json())
      .then(pizzas => this.setState({
        pizzas: pizzas
      }))
      
    //   this.setState({
    //   pizzas: [...this.state.pizzas], pizza
    // }, function(){console.log(this.state, this.state.pizzas)})
  })
  }

  componentDidMount() {
    fetch(API)
    .then(resp=> resp.json())
    .then(pizzas => this.setState({
      pizzas: pizzas
    }))
  }

  render() {
    // console.log(this.state);
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza} handleSubmit={this.handleSubmit} handleChange={this.handleChange} editedPizza={this.state.editedPizza} />
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
