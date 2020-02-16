import React, { Component } from 'react';
import { connect } from 'react-redux';
import { driveTruck, parkTruck, washTruck } from "./actions";
import { bindActionCreators } from "redux";

class Truck extends Component {

    render() {
        const { miles, driving, clean, driveTruck, parkTruck, washTruck } = this.props;
        return (
            <div>
                <div>Truck</div>
                <div>Miles: { miles ? miles : 0 } </div>
                <div>Driving: { driving ? 'true' : 'false' }</div>
                <div>Clean: { clean ? 'true' : 'false' }</div>

                <button onClick={ () => driveTruck(50) }>Drive</button>
                <button onClick={ parkTruck }>Park</button>
                <button onClick={ washTruck }>Wash</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    miles: state.truck.miles,
    driving: state.truck.driving,
    clean: state.truck.clean
});

const mapDispatchToProps = dispatch => bindActionCreators({
    driveTruck,
    parkTruck,
    washTruck
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Truck);
