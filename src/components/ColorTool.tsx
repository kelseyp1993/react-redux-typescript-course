import React from 'react';

import { Color } from '../models/colors';
import { Header } from '../models/headers';
import { ToolHeader } from './ToolHeader';

export type ColorToolProps = {
    colors: Color[];
}

const header: Header = {id:1, name:'Color Tool'};

export function ColorTool(props: ColorToolProps) {

    return (
        <>
            <ToolHeader header={header}/>
            <ul>
                {props.colors.map(color => <li key={color.id}>{color.name}</li>)}
            </ul>
        </>
    );
}