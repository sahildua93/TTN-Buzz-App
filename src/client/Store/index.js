/**
 * Created by sahil-dua on 9/5/17.
 */

import { createStore, applyMiddleware } from 'redux';
import reducer from '../Reducer/index';
import { middlewares } from '../Middleware/index';

const middlewareUser = applyMiddleware(...middlewares);
export const store = createStore(reducer, middlewareUser);