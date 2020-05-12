import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        // case value:
        //     return;
        //     break;
    
        default:
            return state;
        break;
    }
}