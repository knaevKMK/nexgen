import React from "react";

import Product from "../models/product";

import "./Form.css"

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: 1,

      size: 0,
      weight: 0,
      material: "",
      colour: "",

      quantity: 0,
      functionality: "",
      sample: "",
      timeline: "",
      certification: "",
      pricePoint: "",

      infromation: "",
      img: undefined,
    };
  }

  changeHandler = (e, fied) => {
    console.log(e.target.value)
    this.setState({
      fied: e.target.value
    });
  }

  onSubmit(event) {
    event.PrevetDefault();
    event.target.value();
    console.log(event.target.value())
  }
  render() {
    return (
      <div className="Main-Container">
        <form className="Form" onSubmit={(e) => this.onSubmit(e)}>
          <div className="col">
            <div className="groupField">
              <label className="Label">Basic Informations</label>
              <input placeholder="Product Name" value={this.name} name="name" onChange={(e) => this.changeHandler(e, this.name)} />
              <select name="category" onChange={(e) => this.changeHandler(e, this.category)} value={this.category} >
                <option value="1">Accessories</option>
                <option value="2">Parts</option>
                <option value="3">Goods</option>
              </select>
            </div>

            <div className="groupField">
              <label className="Label">Product Specification</label>
              <input name="size" value={this.size} onChange={(e) => this.changeHandler(e, this.size)} placeholder="Product Size" />
              <input name="weight" value={this.weight} onChange={(e) => this.changeHandler(e, this.weight)} placeholder="Product Weight" />
              <input name="material" value={this.material} onChange={(e) => this.changeHandler(e, this.material)} placeholder="Product Material" />
              <input name="colour" value={this.colour} onChange={(e) => this.changeHandler(e, this.colour)} placeholder="Product Colour" />
            </div>
          </div>

          <div className="col">
            <div className="groupField">
              <label className="Label">Product Functionality</label>
              <input name="quantity" value={this.quantity} onChange={(e) => this.changeHandler(e, this.quantity)} placeholder="Quantity" />
              <input name="functionality" value={this.functionality} onChange={(e) => this.changeHandler(e, this.functionality)} placeholder="Product functionality" />
              <input name="sample" value={this.sample} onChange={(e) => this.changeHandler(e, this.sample)} placeholder="Sample" />
              <input name="timeline" value={this.timeline} onChange={(e) => this.changeHandler(e, this.timeline)} placeholder="Timeline" />
              <input name="certification" value={this.certification} onChange={(e) => this.changeHandler(e, this.certification)} placeholder="Certification" />
              <input name="pricePoint" value={this.pricePoint} onChange={(e) => this.changeHandler(e, this.pricePoint)} placeholder="Price Point" />
            </div>
          </div>

          <div className="col">
            <div className="groupField">
              <label className="Label">Additional Informations</label>
              <textarea name="information" value={this.infromation} onChange={(e) => this.changeHandler(e, this.infromation)} placeholder="Additional Informations"></textarea>
              <input type="file" />
            </div>
            <input className="button green" type="submit" value="Next" />
          </div>
        </form>
      </div>
    );
  }

}
export default Form;