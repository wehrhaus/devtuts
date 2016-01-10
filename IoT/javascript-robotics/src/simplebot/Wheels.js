const CRSWheel = require('./CRSWheel.js');

module.exports = (five) => {

    const _forwardRotation = 'cw';

    const leftWheel = new CRSWheel({
        johnnyFive: five,
        name: 'Left Wheel',
        pin: 9,
        forwardRotation: _forwardRotation,
        inverseRotation: false
    });

    const rightWheel = new CRSWheel({
        johnnyFive: five,
        name: 'Right Wheel',
        pin: 8,
        forwardRotation: _forwardRotation,
        inverseRotation: true
    });

    return {

        wheelsForward: () => {
            rightWheel.forward();
            leftWheel.forward();
        },

        wheelsReverse: () => {
            rightWheel.reverse();
            leftWheel.reverse();
        },

        spinLeft: () => {
            rightWheel.forward();
            leftWheel.reverse();
        },

        spinRight: () => {
            rightWheel.reverse();
            leftWheel.forward();
        },

        softLeft: () => {
            rightWheel.forward();
            leftWheel.stop();
        },

        softRight: () => {
            rightWheel.stop();
            leftWheel.forward();
        },

        stopWheels: () => {
            rightWheel.stop();
            leftWheel.stop();
        },

        resetWheels: () => {
            rightWheel.to(87);
            leftWheel.to(90);
        }

    };
};
