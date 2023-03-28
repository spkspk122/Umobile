// import {createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import {commonReducer} from '../reducer/commonReducer';
// import rootSaga from '../saga/rootSaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(commonReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

// export default store;

import {createStore} from 'redux';

import {commonReducer} from '../reducer/commonReducer';

const store = createStore(commonReducer);

export default store;
