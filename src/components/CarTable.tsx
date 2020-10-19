import React, { Component } from 'react';

import { Car } from '../models/cars';
import { CarViewRow } from './CarViewRow';

export type CarTableProps = {
    cars: Car[];
}

export class CarTable extends Component<CarTableProps> {
    render(){
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CarViewRow cars={this.props.cars}/>
                    </tbody>
                </table>
            </>
        );
    }
}