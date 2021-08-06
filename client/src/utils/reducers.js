import { UPDATE_PRODUCTS, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from './actions'

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };

            // IF IT'S NONE OF THESE ACTIONS, DO NOT UPDATE STATE AT ALL AND KEEP THINGS THE SAME!
            default:
                return state;
    }
}
