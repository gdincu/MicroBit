//Create a ball sprite & a pong on each side
let ball = game.createSprite(3, 3)
ball.set(LedSpriteProperty.Direction, 0) //0 sus 90 jos
let pongLeft = game.createSprite(0, 1)
pongLeft.set(LedSpriteProperty.Direction, 0)
let pongRight = game.createSprite(4, 1)
pongRight.set(LedSpriteProperty.Direction, 0)

input.onButtonPressed(Button.A, function () {
    pongLeft.move(1)
    pongLeft.ifOnEdgeBounce()
})

input.onButtonPressed(Button.B, function () {
    pongRight.move(1)
    pongRight.ifOnEdgeBounce()
})

//While loop to move the sprite around and bounce if on edge
while (true) {
    ball.move(1)
    ball.ifOnEdgeBounce()
    basic.pause(1000)
}