import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { driveCar, parkCar, washCar } from "./actions";

const MILES_DRIVEN = 50;

const Car = ({ driveCar, parkCar, washCar, miles, driving, clean }) => (
    <div>
        <h3>Car</h3>
        <div>Miles: { miles ? miles : 0 }</div>
        <div>Driving: { driving ? 'true' : 'false' }</div>
        <div>Clean: { clean ? 'true' : 'false' }</div>

        <button onClick={ () => driveCar(MILES_DRIVEN) }>Drive</button>
        <button onClick={ parkCar }>Park</button>
        <button onClick={ washCar }>Wash</button>
    </div>
);

const mapStateToProps = (state) => ({
    miles: state.car.miles,
    driving: state.car.driving,
    clean: state.car.clean
});

const mapDispatchToProps = dispatch => bindActionCreators({
    driveCar,
    parkCar,
    washCar
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Car);
