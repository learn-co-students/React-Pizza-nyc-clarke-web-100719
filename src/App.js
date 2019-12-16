import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import { ENETDOWN } from 'constants';
import { parse } from 'path';

class App extends Component {

  state = {
    AllPizzas: [],
    pizzaInfo: {
      id: "",
      topping: "",
      size: "",
      vegetarian: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas").then(resp => resp.json()).then(pizzas => 
    
    this.setState({
      AllPizzas: pizzas,
    }))
  }

  getPizza = (e) => {
    this.setState({
      pizzaInfo: e
    })
  }

  editValues = (event) => {
    // console.log(event)
    this.setState({
      pizzaInfo: {
        topping: event.topping,
        size: event.size,
        vegetarian: event.vegetarian
      }
    })
  }

  changeSize = (e) => {
    // console.log(e)
    this.setState({
      pizzaInfo: {
        ...this.state.pizzaInfo,
        size: e
      }
    })
  }

  editTopping = (e) => {
    // console.log(e)
    this.setState({
      pizzaInfo: {
        ...this.state.pizzaInfo,
        topping: e
      }
    })
  }

  isVeggie = (e) => {
    let veg = ""
    // console.log(e.target.value)
    if (e.target.value === "Vegetarian"){
      veg = true;
    } else if (e.target.value === "Not Vegetarian"){
      veg = false;
    }
    this.setState({
      pizzaInfo: {
        ...this.state.pizzaInfo,
        vegetarian: veg
      }
    })
  }

  getNewPizza = (data) => {
    console.log(data)
    fetch(`http://localhost:3000/pizzas/${data.id}` , {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then(resp=>resp.json()).then(parsed => {
      let newArr = this.state.AllPizzas.map(pizza => {
        if (pizza.id === parsed.id){
          return parsed
        }
        else return pizza
      })
      this.setState({
        AllPizzas: newArr
      })
    })
  }

  render() {
    console.log(this.state)
    let renderedPizzas = this.state.AllPizzas

    // console.log(renderedPizzas)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.pizzaInfo}
          isVeggie={this.isVeggie}
          editTopping={this.editTopping}
          changeSize={this.changeSize}
          newPizza={this.getNewPizza}
          // veggieToggle={this.state.veggieToggle}
        />
        <PizzaList getPizza={this.getPizza} pizzaOrders={renderedPizzas}/>        
      </Fragment>
    );
  }
}

export default App;
