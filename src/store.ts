import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer } from './reducer';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import createSagaMiddleware from 'redux-saga';
import { watchNewPoint, onAppLoaded, watchPointsUpdates, watchDeleteItem, watchPointsDrag, watchDragNDrop } from './sagas';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
    blacklist: ['map', 'loading', 'error', 'router']
};

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
// saving the store in the local storage
export const persistor = persistStore(store);
// starting sagas
sagaMiddleware.run(onAppLoaded((store.dispatch)));
sagaMiddleware.run(watchNewPoint);
sagaMiddleware.run(watchPointsUpdates);
sagaMiddleware.run(watchDeleteItem);
sagaMiddleware.run(watchPointsDrag);
sagaMiddleware.run(watchDragNDrop);