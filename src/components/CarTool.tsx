import React from 'react';

import { Car } from '../models/cars';

export function CarTool() {
    const cars: Car[] = [
        {id:5, make:'Nissan', model:'Maxima', year:2004, color:'blue', price:'$3,000'},
        {id:6, make:'Honda', model:'CR-V', year:2017, color:'blue', price:'$30,000'},
    ];

    return <>
        <header>
            <h1>Car Tool</h1>
        </header>
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
                {cars.map(car => 
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
    </>;
}