import {all} from 'redux-saga/effects';
import common from './commonSaga';

export default function* rootSaga() {
  return yield all([common]);
}
