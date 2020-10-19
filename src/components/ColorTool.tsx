import React from 'react';

import { Color } from '../models/colors';

export function ColorTool() {

    const colors: Color[] = [
        {id:1, name:'blue'},
        {id:1, name:'purple'},
        {id:1, name:'teal'},
        {id:1, name:'aqua'},
    ];

    // const colorListItems: colors.map(color => <li>colors.name</li>);

    return (
        <>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {colors.map(color => <li key={color.id}>colors.name</li>)}
            </ul>
        </>
    );
}