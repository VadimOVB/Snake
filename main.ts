let snakeLong = 15
let snake = [sprites.create(img`
    . 6 6 6 6 6 . 
    6 7 7 7 7 7 6 
    6 7 7 7 7 7 6 
    6 7 7 7 7 7 6 
    6 7 7 7 7 7 6 
    6 7 7 7 7 7 6 
    . 6 6 6 6 6 . 
    `, SpriteKind.Player), sprites.create(img`
    .......66.......
    ......6777......
    ......6777......
    .....677777.....
    .....677777.....
    ....67777777....
    ....67777777....
    ...6777777777...
    ...6777777777...
    ...6777777777...
    ..677777777777..
    ..677777777777..
    ..772227722277..
    ..672727727277..
    ..672227722277..
    ..677777777777..
    ..677777777777..
    ..677777777777..
    ..677777777777..
    ..677777777777..
    `, SpriteKind.Player)]
controller.moveSprite(snake[snake.length - 1])
snake[snake.length - 1].vy = -5
snake[snake.length - 1].z = 2
game.onUpdateInterval(500, function () {
    snake.unshift(sprites.create(img`
        . 6 6 6 6 6 . 
        6 7 7 7 7 7 6 
        6 7 7 7 7 7 6 
        6 7 7 7 7 7 6 
        6 7 7 7 7 7 6 
        6 7 7 7 7 7 6 
        . 6 6 6 6 6 . 
        `, SpriteKind.Player))
    snake[0].setPosition(snake[snake.length - 1].x, snake[snake.length - 1].y)
    if (snake.length > snakeLong) {
        snake[snake.length - 2].destroy()
        snake.removeAt(snake.length - 2)
    }
})
