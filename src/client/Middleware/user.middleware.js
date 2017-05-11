/**
 * Created by sahil-dua on 9/5/17.
 */

export const logger = (store) => (next) => (action) => {
    next(action);
}