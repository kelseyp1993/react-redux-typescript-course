import React, { Component, ChangeEvent } from "react";

import { NewColor } from '../models/colors';

export type ColorFormProps = {
    buttonText: string;
    onSubmitColor: (color: NewColor) => void;
};

export type ColorFormState = {
  name: string;
  hexcode: string;
};

export class ColorForm extends Component<ColorFormProps, ColorFormState> {
  // class property
  state = {
    name: "",
    hexcode: "",
  };

  // class arrow function
  change = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      // evaluate the expression in the square braces, and that will
      // be the name of the property which will be updated
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    } as Pick<ColorFormState, keyof ColorFormState>);
  };

  submitColor = () => {
      this.props.onSubmitColor({...this.state});
      this.setState({
          name: "",
          hexcode: "",
      })
  }

  render() {
    console.log(this.state);

    return (
      <form>
        <div>
          {/* React.createElement('label', { htmlFor: 'name-input' }) */}
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={this.state.name}
            onChange={this.change}
          />
        </div>
        <div>
          <label htmlFor="hexcode-input">Hexcode:</label>
          <input
            type="text"
            id="hexcode-input"
            name="hexcode"
            value={this.state.hexcode}
            onChange={this.change}
          />
        </div>
        <button type="button" onClick={this.submitColor}>{this.props.buttonText}</button>
      </form>
    );
  }
}

console.dir(ColorForm);