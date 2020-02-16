const initialTruckState = {
    clean: true,
    driving: false,
    miles: 50
};

export default (state = initialTruckState, action) => {
    const { type } = action;
    switch(type) {
        case 'DRIVE_TRUCK':
            return {
                ...state,
                miles: (state.miles + action.miles),
                driving: action.driving,
                clean: action.clean
            };
        case 'PARK_TRUCK':
            return {
                ...state,
                driving: action.driving
            };
        case 'WASH_TRUCK':
            return {
                ...state,
                clean: action.clean
            };
        default:
            return state;
    }
}
