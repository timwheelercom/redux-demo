export const driveCar = () => {
    return { type: 'DRIVE_CAR', miles: 5, driving: true, clean: false }
};

export const parkCar = () => {
    return { type: 'PARK_CAR', driving: false }
};

export const washCar = () => {
    return { type: 'WASH_CAR', clean: true }
};
