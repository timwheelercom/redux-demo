// action creators
export const driveCar = (miles) => {
    return {
        type: 'DRIVE_CAR',
        miles: miles,
        driving: true,
        clean: false
    }
};

export const parkCar = () => {
    return {
        type: 'PARK_CAR',
        driving: false
    }
};

export const washCar = () => {
    return {
        type: 'WASH_CAR',
        clean: true
    }
};
