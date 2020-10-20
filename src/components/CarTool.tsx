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
    editCarId: number;
}

export class CarTool extends Component<CarToolProps> {
    state = {
        //copy of the array
        cars: [...this.props.cars],
        editCarId: -1,
    }

    addCar = (newCar: NewCar) => {
        this.setState({
            cars: [
                ...this.state.cars,
                {
                    ...newCar,
                    id: Math.max(...this.state.cars.map((c) => c.id), 0) + 1,
                },
            ],
            editCarId: -1,
        })
    }

    deleteCar = (carId: number) => {
        this.setState({
            cars: this.state.cars.filter((c) => c.id !== carId),
            editCarId: -1,
        });
    }

    editCar = (carId: number) => {
        this.setState({
            editCarId: carId,
        });
    };

    cancelCar = () => {
        this.setState({
            editCarId: -1,
        });
    };

    saveCar = (carEdit: Car) => {
        var carsCopy = this.state.cars;

        var index = carsCopy.findIndex(car => {
            return carEdit.id === car.id;
        })

        if (index !== -1) {
            carsCopy[index] = carEdit;

            this.setState({
                cars: carsCopy,
                editCarId: -1,
            });
        }
    };

    render() {
        return (
            <>
                <ToolHeader headerText="Car Tool" />
                <CarTable
                    cars={this.state.cars}
                    editCarId={this.state.editCarId}
                    onEditCar={this.editCar}
                    onDeleteCar={this.deleteCar}
                    onCancelCar={this.cancelCar}
                    onSaveCar={this.saveCar}
                />
                <CarForm buttonText="Add Car" onSubmitCar={this.addCar} />
            </>
        );
    }
}