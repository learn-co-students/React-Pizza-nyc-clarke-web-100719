import React from "react"

const PizzaForm = ({activePizza, updatePizza, updateActivePizza}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (activePizza) {
      updatePizza(activePizza)
    }
  }

  const handleChange = (e) => {
    updateActivePizza(e.target.name, e.target.value)
  }

  return(
      <form className="form-row" onSubmit={handleSubmit}>
        <div className="col-5">
            <input onChange={handleChange} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                activePizza.topping
              }/>
        </div>
        <div className="col">
          <select onChange={handleChange} name="size" value={ activePizza.size } className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={handleChange} name="vegetarian" className="form-check-input" type="radio" value={true} checked={ activePizza.vegetarian === true }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleChange} name="vegetarian" className="form-check-input" type="radio" value={false} checked={ activePizza.vegetarian === false }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" >Submit</button>
        </div>
      </form>

  )
}

export default PizzaForm
