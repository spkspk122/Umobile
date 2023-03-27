import {SET_PAYMENT} from '../actionTypes';

export const paymentDetails = data => {
  console.log(data, 'jhjhj');
  return {
    type: SET_PAYMENT,
    payload: {data},
  };

  // return {
  //   type: SET_PAYMENT,
  //   payload: filterData,
  // };
};
