let tail_y = 0
let tail_x = 0
let head_y = 0
let head_x = 0
let eaten = false
let score = 0
let dir = 0
let food_y = 0
let food_x = 0
let alive = false
let snake_y: number[] = []
let snake_x: number[] = []
let turn = 0
input.calibrateCompass();
basic.pause(400)

input.onButtonPressed(Button.A, function () {
    turn = 3
})

input.onButtonPressed(Button.B, function () {
    turn = 1
})

input.onButtonPressed(Button.AB, function () {
    turn = 0
})

snake_x = [2, 2]
snake_y = [4, 3]
alive = true
food_x = -1
food_y = -1
dir = 0
score = 0
eaten = true
basic.clearScreen()
for (let index = 0; index <= 1; index++) {
    led.plot(
        snake_x[index],
        snake_y[index]
    )
}
while (alive) {
    for (let i = 0; i < 4; i++) {
        basic.pause(100)
        led.toggle(food_x, food_y)
    }
    basic.pause(100)
    dir = (dir + turn) % 4
    turn = 0
    head_x = snake_x[snake_x.length - 1]
    head_y = snake_y[snake_y.length - 1]
    if (dir == 0) {
        head_y += -1
    } else if (dir == 1) {
        head_x += 1
    } else if (dir == 2) {
        head_y += 1
    } else if (dir == 3) {
        head_x += -1
    }
    if (head_x < 0 || head_x >= 5 || (head_y < 0 || head_y >= 5) || led.point(head_x, head_y)) {
        alive = false
    } else {
        snake_x.push(head_x)
        snake_y.push(head_y)
        led.plot(head_x, head_y)
        if (head_x == food_x && head_y == food_y) {
            score += 1
            eaten = true
        } else {
            tail_x = snake_x.shift()
            tail_y = snake_y.shift()
            led.unplot(tail_x, tail_y)
        }
        while (eaten) {
            food_x = Math.randomRange(0, 4)
            food_y = Math.randomRange(0, 4)
            if (!(led.point(food_x, food_y))) {
                eaten = false
            }
        }
    }
}
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
while (true) {
    basic.showNumber(score)
    if (score >= 10) {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).scrollImage(1, 200)
    }
}
