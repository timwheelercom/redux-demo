const initialCarState = {
    clean: true,
    driving: false,
    miles: 100
};

export default (state = initialCarState, action) => {
    const { type } = action;
    switch(type) {
        case 'DRIVE_CAR':
            return {
                ...state,
                miles: (state.miles + action.miles),
                driving: action.driving,
                clean: action.clean,
            };
        case 'PARK_CAR':
            return {
                ...state,
                driving: action.driving
            };
        case 'WASH_CAR':
            return {
                ...state,
                clean: action.clean
            };
        default:
            return state;
    }
}