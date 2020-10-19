import React, { Component } from 'react';

import { Car } from '../models/cars';

export type CarViewRowProps = {
    cars: Car[];
}

export class CarViewRow extends Component<CarViewRowProps> {
    render(){
        return (
            <>
                {this.props.cars.map(car => 
                    <tr key={car.id}>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.color}</td>
                        <td>{car.price}</td>
                    </tr>
                )}
            </>
        );
    }
}