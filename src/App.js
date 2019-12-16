import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzaURI = 'http://localhost:3000/pizzas'

class App extends Component {
  state = {
    pizzas: [],
    activePizza: {
      "topping": "",
      "size": "",
      "vegetarian": null
    }
  
  }

  fetchPizzas = () => {
    fetch(pizzaURI)
      .then(resp => resp.json())
      .then(pizzas => this.setState({pizzas: pizzas}))
  }


  // updates on backend
  updatePizza = (pizza) => {
    const pizzaObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(pizza)

    }
    fetch(pizzaURI + `/${pizza.id}`, pizzaObj)
      .then(resp => resp.json())
      .then(pizza => {
        this.setState({activePizza: {
          "topping": "",
          "size": "",
          "vegetarian": null
        }})
        this.fetchPizzas()
      })

  }

  updateActivePizza = (key, value) => {
    if (value === 'true') {
      value = true
    } else if (value === 'false') {
      value = false
    }
    this.setState(prevState => {
      return {
        activePizza: {...prevState.activePizza, [key]: value}
    }})
    
  }

  changeActivePizza = (pizza) => {
    this.setState({activePizza: pizza})
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm activePizza={this.state.activePizza} updatePizza={this.updatePizza} updateActivePizza={this.updateActivePizza} />
        <PizzaList pizzas = {this.state.pizzas} changeActivePizza={this.changeActivePizza} />
      </Fragment>
    );
  }
}

export default App;
