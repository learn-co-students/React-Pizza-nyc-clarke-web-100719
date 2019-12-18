import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.changeForm} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={props.formData.topping}/>
        </div>
        <div className="col">
          <select onChange={props.changeForm} value={props.formData.size} name="size" className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={props.changeForm} name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={props.formData.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={props.changeForm} name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={props.formData.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.submitForm(props.formData.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
