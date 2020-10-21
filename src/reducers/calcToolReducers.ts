import { CalcToolState } from "../models/calc";
import { AddAction, SubtractAction, ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION, MultiplyAction, DivideAction } from "../actions/calcToolActions";

type CalcToolActions = AddAction | SubtractAction | MultiplyAction | DivideAction;

export const calcToolReducer = (
    state: CalcToolState = {result: 0, history: []}, 
    action: CalcToolActions
    ) => {
        switch(action.type) {
            case ADD_ACTION:
                return{
                    ...state,
                    result: state.result + action.payload.value,
                    history: [...state.history, {
                        opName: '+',
                        opValue: action.payload.value,
                        id: Math.max(...state.history.map(he => he.id), 0) +1,
                    }],
                };
            case SUBTRACT_ACTION: 
                return{
                    ...state,
                    result: state.result - action.payload.value,
                    history: [...state.history, {
                        opName: '-',
                        opValue: action.payload.value,
                        id: Math.max(...state.history.map(he => he.id), 0) +1,
                    }],
                };
            case MULTIPLY_ACTION: 
                return{
                    ...state,
                    result: state.result * action.payload.value,
                    history: [...state.history, {
                        opName: '*',
                        opValue: action.payload.value,
                        id: Math.max(...state.history.map(he => he.id), 0) +1,
                    }],
                };
            case DIVIDE_ACTION: 
                return{
                    ...state,
                    result: state.result / action.payload.value,
                    history: [...state.history, {
                        opName: '/',
                        opValue: action.payload.value,
                        id: Math.max(...state.history.map(he => he.id), 0) +1,
                    }],
                };
            default: 
                return state;
        }
    };