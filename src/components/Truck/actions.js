export const driveTruck = (miles) => {
    return {
        type: 'DRIVE_TRUCK',
        miles: miles,
        driving: true,
        clean: false
    }
};

export const parkTruck = () => {
    return {
        type: 'PARK_TRUCK',
        driving: false
    }
};

export const washTruck = () => {
    return {
        type: 'WASH_TRUCK',
        clean: true
    }
};
