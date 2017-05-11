/**
 * Created by sahil-dua on 9/5/17.
 */

import { combineReducers } from 'redux'
import user from './user.reducer'
import buzz from './buzz.reducer'

export default combineReducers({
    user,
    buzz,
})