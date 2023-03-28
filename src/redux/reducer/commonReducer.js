import {broadbandPlan} from '../../components/config';
import * as ActionTypes from '../actionTypes';

const INITIAL_STATE = {
  selectedPlan: broadbandPlan,
  filterData: '',
};

export const commonReducer = (state = INITIAL_STATE, action) => {
  const {type} = action;
  switch (type) {
    case ActionTypes.SET_PAYMENT:
      return {
        ...state,
        selectedPlan: [...action.payload],
      };

    default:
      return state;
  }
};
