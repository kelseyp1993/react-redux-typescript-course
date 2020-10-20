import React, { Component } from 'react';

import { Car, NewCar } from '../models/cars';
import { CarForm } from './CarForm';
import { CarTable } from './CarTable';
import { ToolHeader } from './ToolHeader';

export type CarToolProps = {
    cars: Car[];
}

export type CarToolState = {
    cars: Car[];
}

export class CarTool extends Component<CarToolProps> {
    state = {
        //copy of the array
        cars: [...this.props.cars],
    }

    addCar = (newCar: NewCar) => {
        this.setState({
            cars: [
                ...this.state.cars,
                {
                    ...newCar,
                    id: Math.max(...this.state.cars.map((c) => c.id), 0) +1,
                },
            ],
        })
    }

    render(){
        return (
            <>
                <ToolHeader headerText="Car Tool"/>
                <CarTable cars={this.state.cars}/>
                <CarForm buttonText="Add Color" onSubmitCar={this.addCar}/>
            </>
        );
    }
}