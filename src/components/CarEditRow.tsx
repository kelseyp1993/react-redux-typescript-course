import React, { Component, ChangeEvent } from "react";

import { Car } from "../models/cars";

export type CarEditRowProps = {
    car: Car;
    onSaveCar: (car: Car) => void;
    onCancelCar: () => void;
};

export type CarEditRowState = {
    make: string;
    model: string;
    year: number;
    color: string;
    price: string;
};

export class CarEditRow extends Component<CarEditRowProps, CarEditRowState> {
    state = {
        make: this.props.car.make,
        model: this.props.car.model,
        year: this.props.car.year,
        color: this.props.car.color,
        price: this.props.car.price,
    };

    change = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]:
                e.target.type === "number" ? Number(e.target.value) : e.target.value,
        } as Pick<CarEditRowState, keyof CarEditRowState>);
    };

    cancelCar = () => {
        this.props.onCancelCar();
    };

    saveCar = () => {
        const car = {
            id: this.props.car.id,
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            color: this.state.color,
            price: this.state.price,
        }
        this.props.onSaveCar(car);
    };

    render() {
        return (
            <tr>
                <td>{this.props.car.id}</td>
                <td>
                    <input
                        type="text"
                        id="make-input"
                        name="make"
                        value={this.state.make}
                        onChange={this.change}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        id="model-input"
                        name="model"
                        value={this.state.model}
                        onChange={this.change}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        id="year-input"
                        name="year"
                        value={this.state.year}
                        onChange={this.change}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        id="color-input"
                        name="color"
                        value={this.state.color}
                        onChange={this.change}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        id="price-input"
                        name="price"
                        value={this.state.price}
                        onChange={this.change}
                    />
                </td>
                <td>
                    <button type="button" onClick={this.saveCar}>Save</button>
                    <button type="button" onClick={this.cancelCar}>Cancel</button>
                </td>
            </tr>
        );
    }
}