const gpio = require('rpi-gpio');

const pin   = 7;
const delay = 70;
const max   = 300;
let count = 0;

console.log(`Starting on pin [${pin}]`);
gpio.setup(pin, gpio.DIR_OUT, on);

function on() {
    if (count >= max) {
        gpio.destroy(() => {
            console.log('Closed pins, now exit');
        });
        return;
    }

    setTimeout(() => {
        gpio.write(pin, 1, off);
        count += 1;
    }, delay);
}

function off() {
    setTimeout(() => {
        gpio.write(pin, 0, on);
    }, delay);
}