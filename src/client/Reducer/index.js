/**
 * Created by sahil-dua on 9/5/17.
 */

import { combineReducers } from 'redux'
import user from './user.reducer'
import buzz from './buzz.reducer'
import comment from './comment.reducer'

export default combineReducers({
    user,
    buzz,
    comment
})