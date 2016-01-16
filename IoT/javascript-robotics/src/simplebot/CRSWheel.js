/* eslint-disable no-console, strict */

'use strict';

class CRSWheel {

    constructor(opts) {

        if (!opts.johnnyFive) {
            throw new Error('CRSWheel (name: ' + opts.name + ') REQUIRES an instance of `Johnny-Five` to be passed as the first argument.');
        }

        const _DEFAULTS = {
            johnnyFive: {},
            forwardRotation: 'cw',
            inverseRotation: false,
            name: 'CRS Wheel',
            pin: 8,
            servoType: 'continuous'
        };

        Object.assign(this, _DEFAULTS, opts);

        this.createWheel();

    }

    get identifier() {
        return this.name;
    }

    get forwardDirection() {
        return this.forwardRotation;
    }

    get reverseDirection() {
        return this.forwardDirection === 'cw'
                ? 'ccw'
                : 'cw';
    }

    createWheel() {
        this.wheel = new this.johnnyFive.Servo({
            type: this.servoType,
            pin: this.pin,
            invert: this.inverseRotation
        });
    }

    forward() {
        console.log(this.name + ' forward');
        this.wheel.stop();
        this.wheel[this.forwardDirection]();
    }

    reverse() {
        console.log(this.name + ' reverse -> ' + this.reverseDirection);
        this.wheel.stop();
        this.wheel[this.reverseDirection]();
    }

    stop() {
        console.log(this.name + ' stop');
        this.wheel.stop();
    }

    to(value) {
        console.log(this.name + ' moving to.');
        this.wheel.stop();
        this.wheel.to(value);
    }

}

module.exports = CRSWheel;
