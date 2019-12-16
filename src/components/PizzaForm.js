import React from "react"

const PizzaForm = (props) => {
  console.log(props.pizza)
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={e => props.editTopping(e.target.value)} className="form-control" placeholder="Pizza Topping" value={
                props.pizza.topping
              }/>
        </div>
        <div className="col">
          <select onChange={e => props.changeSize(e.target.value)} value={props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onChange={e => props.isVeggie(e)} checked={props.pizza.vegetarian === true}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={e => props.isVeggie(e)} checked={props.pizza.vegetarian === false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={event => props.newPizza(props.pizza)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
