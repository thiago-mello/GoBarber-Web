import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistReducer from './persistReducers';
import createStore from './createStore';

import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducer(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
