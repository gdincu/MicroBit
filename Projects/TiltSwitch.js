basic.forever(function () {
let x=Math.round(pins.digitalReadPin(DigitalPin.P0));
basic.showNumber(x);
})