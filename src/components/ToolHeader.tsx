import React from 'react';

import { Header } from '../models/headers';

export type ToolHeaderProps = {
    header: Header;
}

export function ToolHeader(props: ToolHeaderProps) {

    return <> 
            <header key={props.header.id}>
                <h1>{props.header.name}</h1>
            </header>
    </>;
}