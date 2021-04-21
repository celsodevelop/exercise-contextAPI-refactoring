// src/Cars.jsx

// import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

const initialState = {
  value: {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  },
};

const CarsContext = createContext(initialState);

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        cars: {
          red: false,
          blue: false,
          yellow: false,
          moveCar: this.moveCar,
        },
      },
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    console.log(car);
    console.log(side);
    this.setState(((state) => ({ value: { cars: { ...state.value.cars, [car]: side } } })));
  }
  render() {
    const contextValue = {
      ...this.state.value,
      moveCar: this.moveCar,
    }
    return (
      <CarsContext.Provider value={ contextValue }>
        <CarsContext.Consumer>
          {({cars: {red: redCar, blue: blueCar, yellow: yellowCar},  moveCar}) => (
            <div>
            {console.log('redCar')}
            {console.log(redCar)}
              <div>
                <img
                  className={redCar ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => moveCar('red', !redCar)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={blueCar ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button onClick={() => moveCar('blue', !blueCar)} type="button">
                  Move
                </button>
              </div>
              <div>
                <img
                  className={yellowCar ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => moveCar('yellow', !yellowCar)}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
          )}
        </CarsContext.Consumer>
      </CarsContext.Provider>
    );
  }
}
// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow});

// const mapDispatchToProps = { moveCar };

export default Cars;
