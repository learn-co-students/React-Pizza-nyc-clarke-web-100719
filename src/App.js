import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state={
    pizzas:[],
    pizzaOnForm:{
      topping: '',
      size:'',
      vegetarian: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(res =>{
      this.setState({
        pizzas:res.map((e,ind)=>({...e,index:ind}))
      })
    })
  }

  editPizza = index =>{
    let currentPizza = {...this.state.pizzas[index]}
    this.setState({pizzaOnForm:currentPizza})
  }

  handleChange = target =>{
    this.setState({pizzaOnForm:{
      ...this.state.pizzaOnForm,
      [target.name]: target.value
    }})
  }

  handleVeg = target =>{
    let vegb = target.value === 'Vegetarian' ? true : false
    this.setState({
      pizzaOnForm:{
        ...this.state.pizzaOnForm,
        vegetarian: vegb
      }
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    let pizzaToUpdate = {...this.state.pizzaOnForm}
    let copyPizza = [...this.state.pizzas]
    copyPizza.splice(pizzaToUpdate.index,1,pizzaToUpdate)
    this.setState({pizzas:copyPizza, pizzaOnForm:{}})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm {...this.state.pizzaOnForm} handleSubmit={this.handleSubmit}handleVeg={this.handleVeg} handleChange={this.handleChange}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
