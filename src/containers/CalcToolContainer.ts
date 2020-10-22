import { connect } from 'react-redux';
import { CalcToolAppState } from '../models/calc';
import { bindActionCreators, Dispatch } from 'redux';
import { createAddAction, createSubtractAction, createMultiplyAction, createDivideAction, createClearAction, createDeleteHistoryEntryAction } from '../actions/calcToolActions';
import { CalcTool } from '../components/CalcTool';

const mapStateToProps = (state: CalcToolAppState) => {
    const result = state.history.reduce((total, historyEntry) => {
        switch (historyEntry.opName) {
            case 'ADD':
                return total + historyEntry.opValue;
            case 'SUBTRACT':
                return total - historyEntry.opValue;
            case 'MULTIPLY':
                return total * historyEntry.opValue;
            case 'DIVIDE':
                return total / historyEntry.opValue;
            default:
                return total;
        }
    }, 0);

    return {
        result,
        history: state.history,
        errorMessage: state.errorMessage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            onAdd: createAddAction,
            onSubtract: createSubtractAction,
            onMultiply: createMultiplyAction,
            onDivide: createDivideAction,
            onClear: createClearAction,
            onDeleteHistoryEntry: createDeleteHistoryEntryAction,
        },
        dispatch,
    );

const createCalcToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CalcToolContainer = createCalcToolContainer(CalcTool);