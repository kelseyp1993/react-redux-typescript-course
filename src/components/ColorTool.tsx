import React from 'react';

import { Color } from '../models/colors';
import { ToolHeader } from './ToolHeader';

export type ColorToolProps = {
    colors: Color[];
}


export function ColorTool(props: ColorToolProps) {

    return (
        <>
            <ToolHeader headerText="Color Tool"/>
            <ul>
                {props.colors.map(color => <li key={color.id}>{color.name}</li>)}
            </ul>
        </>
    );
}