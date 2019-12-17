import React from "react"

const Pizza = (props) => {
  // console.log(props)
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? 'Vegetarian' : 'Not Vegetarian'}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.handleClick(props.pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
