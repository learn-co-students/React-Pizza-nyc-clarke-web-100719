import React from "react"
import { POINT_CONVERSION_COMPRESSED } from "constants"

const Pizza = (props) => {
  const yesOrNo = (a) => {
    if (a){
      return "Yes"
    }
    else return "No"
  }

  let pizzaInfo = {
    id: props.pizza.id,
    topping: props.pizza.topping,
    size: props.pizza.size,
    vegetarian: props.pizza.vegetarian
  }

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{yesOrNo(props.pizza.vegetarian)}</td>
      <td><button type="button" className="btn btn-primary" id={props.pizza.id} onClick={() => props.getPizza(pizzaInfo)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
