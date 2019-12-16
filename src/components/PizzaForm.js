import React from "react"

const PizzaForm = (props) => {
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" name="topping" onChange={props.handleChange} placeholder="Pizza Topping" value={props.pizzaToEdit.topping}/>
          </div>
          <div className="col">
            <select value={props.pizzaToEdit.size} name="size" onChange={props.handleChange} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={props.handleChange} value="Vegetarian" checked={props.pizzaToEdit.vegetarian}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={props.handleChange} value="Not Vegetarian" checked={!props.pizzaToEdit.vegetarian}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" onClick={(e) => props.submitForm(e, props.pizzaToEdit.id)} className="btn btn-success">Submit</button>
          </div>
        </div>

    )
}

export default PizzaForm
