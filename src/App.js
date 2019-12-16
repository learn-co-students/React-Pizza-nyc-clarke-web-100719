import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    pizzaToEdit: {
      topping: "",
      size: "",
      vegetarian: false
    },
    renderedPizzas: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pizzas')
      .then(response => response.json())
      .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

  renderedPizzaArray = () => {
    // if (renderedPizzas)
    return this.state.pizzas
  }

  handleClick = (e, id) => {
    // e.persist()
    let pizzaToEdit = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({
      pizzaToEdit: pizzaToEdit
    })
  }

  handleChangeForm = (e) => {
    this.handleVeg(e.target)
    this.setState({
      pizzaToEdit:{
        ...this.state.pizzaToEdit, //have to use this because it's nested inside an object. 
        //Not changing value of obj, changing value of key inside obj
        [e.target.name]: e.target.value //otherwise just use this for first level state key/values
      }
    })
  }

  handleVeg = (target) => {
    if (target.value === "Vegetarian") {
      this.setState({
        pizzaToEdit: {
          vegetarian: true
        }
      })
    } else if (target.value === "Not Vegetarian") {
      this.setState({
        pizzaToEdit: {
          vegetarian: false
        }
      })
    }
  }

  handleForm = (e, id) => {
    console.log(this.state.pizzaToEdit)
    let pizzaIndex = this.state.pizzas.findIndex(pizza => pizza.id === id)
    let newPizzaArray = [...this.state.pizzas]
    newPizzaArray[pizzaIndex] = {...this.state.pizzaToEdit}
    this.setState({
        pizzas: newPizzaArray
    })
  }

  render() {
    console.log(this.state.pizzas)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaToEdit={this.state.pizzaToEdit} submitForm={this.handleForm} handleChange={this.handleChangeForm}/>
        <PizzaList pizzas={this.state.pizzas} pizzaClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
