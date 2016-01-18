/* eslint-disable no-console, strict */

'use strict';

const five = require('johnny-five');
const keypress = require('keypress');
const opts = {};
const board = new five.Board(opts);

let toggleRotation;
let handleKeypress;
let wheels;
let forwardKeypress = 'up';
let reverseKeypress = 'down';
let leftKeypress = 'left';
let rightKeypress = 'right';
let keyPressed = false;

keypress(process.stdin);
opts.port = process.argv[2] || '';

process.on('exit', (code) => {
    wheels.stop();
    console.log('Exiting with code:', code);
});

process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.setRawMode(true);

board.on('ready', () => {

    wheels = require('./Wheels.js')(five);

    process.stdin.on('keypress', (ch, key) => {

        if (!key || keyPressed) return;

        const removeDualCall = setTimeout(() => {
            keyPressed = false;
            clearTimeout(removeDualCall);
        }, 25);
        keyPressed = true;
        handleKeypress(key);

    });

});

toggleRotation = () => {
    if (forwardKeypress === 'up') {
        forwardKeypress = 'down';
        reverseKeypress = 'up';
        leftKeypress = 'right';
        rightKeypress = 'left';
    } else {
        forwardKeypress = 'up';
        reverseKeypress = 'down';
        leftKeypress = 'left';
        rightKeypress = 'right';
    }
};

handleKeypress = (key) => {
    if (key.name === 's') {
        toggleRotation();
    } else if (key.name === 'q') {
        wheels.reset();
        process.exit();
    } else if (key.name === forwardKeypress) {
        wheels.forward();
    } else if (key.name === reverseKeypress) {
        wheels.reverse();
    } else if (key.name === leftKeypress && !key.shift) {
        wheels.softLeft();
    } else if (key.name === leftKeypress && key.shift) {
        wheels.spinLeft();
    } else if (key.name === rightKeypress && !key.shift) {
        wheels.softRight();
    } else if (key.name === rightKeypress && key.shift) {
        wheels.spinRight();
    } else if (key.name === 'space') {
        wheels.reset();
    }
};
