import {Action} from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';

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

export interface MultiplyAction extends Action<typeof MULTIPLY_ACTION> {
    payload: {
        value: number;
    }
}

export type createMultiplyAction = (num: number) => MultiplyAction;

export const createMultiplyAction = (num: number) => {
    return {
        type: MULTIPLY_ACTION,
        payload: {
            value: num,
        },
    } as MultiplyAction;
};

export interface DivideAction extends Action<typeof DIVIDE_ACTION> {
    payload: {
        value: number;
    }
}

export type createdIVIDEAction = (num: number) => DivideAction;

export const createDivideAction = (num: number) => {
    return {
        type: DIVIDE_ACTION,
        payload: {
            value: num,
        },
    } as DivideAction;
};
