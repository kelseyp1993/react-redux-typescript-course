import React from 'react';

import { Header } from '../models/headers';

export type ToolHeaderProps = {
    headers: Header[];
}

export function ToolHeader(props: ToolHeaderProps) {

    return <>
        {props.headers.map(header => 
            <header key={header.id}>
                <h1>{header.name}</h1>
            </header>
        )}
    </>;
}