import React from 'react';

export function CarTool() {
  // intrinsic element, with ReactDOM, the HTML tags are all intrinsic
  // reference the intrensic element using a string-based tag name
  // JSX - starts with lower case letter
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
                <tr>
                    <td>1</td>
                    <td>Nissan</td>
                    <td>Maxima</td>
                    <td>2004</td>
                    <td>blue</td>
                    <td>$3,000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Honda</td>
                    <td>CR-V</td>
                    <td>2017</td>
                    <td>blue</td>
                    <td>$30,000</td>
                </tr>
            </tbody>
        </table>
    </>;
}