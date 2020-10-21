import {Action} from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';

export interface AddAction extends Action<typeof ADD_ACTION> {
    payload: {
        value: number;
    };
};

export type createAddAction = (num: number) => AddAction;

export const createAddAction = (num: number) => {
    return {
        type: ADD_ACTION,
        payload: {
            value: num,
        },
    } as AddAction;
};

export interface SubtractAction extends Action<typeof SUBTRACT_ACTION> {
    payload: {
        value: number;
    }
}

export type createSubtractAction = (num: number) => SubtractAction;

export const createSubtractAction = (num: number) => {
    return {
        type: SUBTRACT_ACTION,
        payload: {
            value: num,
        },
    } as SubtractAction;
};
