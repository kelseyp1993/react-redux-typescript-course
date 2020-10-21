import { connect } from 'react-redux';
import { CalcToolState } from '../models/calc';
import { bindActionCreators, Dispatch } from 'redux';
import { createAddAction, createSubtractAction } from '../actions/calcToolActions';
import { CalcTool } from '../components/CalcTool';

const mapStateToProps = (state: CalcToolState) => ({ result: state.result });

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            onAdd: createAddAction,
            onSubtract: createSubtractAction,
        },
        dispatch,
    );

const createCalcToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CalcToolContainer = createCalcToolContainer(CalcTool);