import * as ActionTypes from './ActionTypes';
import { COMMENTS } from '../shared/comments';

export const Comments = (state = Comments, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
            break;
    
        default:
            return state;
        break;
    }
}