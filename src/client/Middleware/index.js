/**
 * Created by sahil-dua on 9/5/17.
 */

import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

export const middlewares = [thunkMiddleware, logger ]