import _ from 'lodash';

const basketReducer = (state = {

}, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            const newEvent = action.payload;
            // newEvent.id = newId(state.events);
            return {
                ...state,
                events: _.union(state.events, [newEvent]),
            };
        default:
            // other event
            break;
    }
    return state;
};

export default basketReducer;
