import { Reducer, AnyAction, combineReducers } from 'redux';
import { HistoryEntry } from '../models/calc';
import {
    AddAction,
    SubtractAction,
    MultiplyAction,
    DivideAction,
    ClearAction,
    ADD_ACTION,
    SUBTRACT_ACTION,
    MULTIPLY_ACTION,
    DIVIDE_ACTION,
    CLEAR_ACTION,
    DeleteHistoryEntryAction,
    DELETE_HISTORY_ENTRY_ACTION,
} from '../actions/calcToolActions';

type MathOpActions = AddAction | SubtractAction | MultiplyAction | DivideAction;

function isMathOp(action: AnyAction): action is MathOpActions {
    return [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(
        action.type,
    );
}

type CalcToolActions = MathOpActions | ClearAction | DeleteHistoryEntryAction;

export const checkInput = (action: MathOpActions) => {
    if (action.type === DIVIDE_ACTION && action.payload.value === 0) {
        return 'Division by zero is not allowed.';
    }

    if (action.payload.value < 0) {
        return 'Value must be greater than or equal to 0.';
    }

    return '';
};

export const historyReducer: Reducer<HistoryEntry[], CalcToolActions> = (
    history = [],
    action,
) => {
    if (action.type === CLEAR_ACTION) {
        return [];
    }

    if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
        return history.filter((he) => he.id !== action.payload.historyEntryId);
    }

    if (isMathOp(action) && checkInput(action)) {
        return history;
    }

    if (
        [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(
            action.type,
        )
    ) {
        return [
            ...history,
            {
                opName: action.type,
                opValue: action.payload.value,
                id: Math.max(...history.map((he) => he.id), 0) + 1,
            },
        ];
    }

    return history;
};

export const errorMessageReducer: Reducer<string, CalcToolActions> = (
    errorMessage = '',
    action,
) => {
    if (isMathOp(action)) {
        const errMsg = checkInput(action);
        if (errMsg.length > 0) {
            return errMsg;
        } else {
            return '';
        }
    }

    if (
        action.type === CLEAR_ACTION ||
        action.type === DELETE_HISTORY_ENTRY_ACTION
    ) {
        return '';
    }

    return errorMessage;
};

export const calcToolReducer = combineReducers({
    errorMessage: errorMessageReducer,
    // result is now derived/computed from state
    // result: resultReducer,
    history: historyReducer,
});
