import { connect } from 'react-redux';
import { CalcToolAppState } from '../models/calc';
import { bindActionCreators, Dispatch } from 'redux';
import { createAddAction, createSubtractAction, createMultiplyAction, createDivideAction } from '../actions/calcToolActions';
import { CalcTool } from '../components/CalcTool';

const mapStateToProps = (state: CalcToolAppState) => ({ result: state.result, history: state.history });

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            onAdd: createAddAction,
            onSubtract: createSubtractAction,
            onMultiply: createMultiplyAction,
            onDivide: createDivideAction,
        },
        dispatch,
    );

const createCalcToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CalcToolContainer = createCalcToolContainer(CalcTool);