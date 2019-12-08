import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

const crashReporter = store => next => action => {
    try {
        console.log('crashReporter');
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err);
    }
};

const configureStore = () => {
    const middlewares = [ thunk,crashReporter ];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger({ collapsed: true }));
    }
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares));
    return store;
};

export default configureStore;
