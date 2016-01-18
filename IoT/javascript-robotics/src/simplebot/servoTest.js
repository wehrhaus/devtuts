const temporal = require('temporal');
const five = require('johnny-five');
const opts = {};
opts.port = process.argv[2] || '';

const board = new five.Board(opts);

board.on('ready', () => {

    const wheels = require('./Wheels.js')(five);

    temporal.queue([
        {
            delay: 500,
            task: () => wheels.forward()
        },
        {
            delay: 2000,
            task: () => wheels.reverse()
        },
        {
            delay: 2000,
            task: () => wheels.spinLeft()
        },
        {
            delay: 3000,
            task: () => wheels.spinRight()
        },
        {
            delay: 3000,
            task: () => wheels.softLeft()
        },
        {
            delay: 3000,
            task: () => wheels.softRight()
        },
        {
            delay: 5000,
            task: () => wheels.forward()
        },
        {
            delay: 2000,
            task: () => wheels.reset()
        },
        {
            delay: 500,
            task: () => process.exit(0)
        }
    ]);

    process.on('exit', (code) => {
        wheels.stopWheels();
        console.log('Exiting with code:', code);
    });

});
