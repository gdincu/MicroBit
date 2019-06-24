let i = 0;
basic.forever(function () {
    let timeNow = Math.round((input.runningTime() - 0) / 1000)
    if (timeNow >= i * 10)
        basic.showNumber(timeNow - (i * 10))
    if (timeNow % 10 == 9) i++;
})

