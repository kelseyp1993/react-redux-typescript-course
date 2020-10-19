import React from 'react';

import { Car } from '../models/cars';
import { Header } from '../models/headers';
import { ToolHeader } from './ToolHeader';

export type CarToolProps = {
    cars: Car[];
}

const headerList: Header[] = [
    {id:1, name:'Car Tool'},
];

export function CarTool(props: CarToolProps) {

    return (
        <>
            <ToolHeader headers={headerList}/>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cars.map(car => 
                        <tr key={car.id}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.color}</td>
                            <td>{car.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}