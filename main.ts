namespace SpriteKind {
    export const target = SpriteKind.create()
    export const dart = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (single == 0) {
        if (info.score() > 0) {
            myDart = darts.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 5 5 f . . . . . . 
                . . . . . . f 5 5 f . . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . f 5 5 5 5 5 5 f . . . . 
                . . . . f 5 5 5 5 5 5 f . . . . 
                . . . f 5 5 5 5 5 5 5 5 f . . . 
                . . . f 5 5 5 5 5 5 5 5 f . . . 
                . . . f 5 5 5 5 5 5 5 5 f . . . 
                . . . . f 5 5 5 5 5 5 f . . . . 
                . . . . f 5 5 5 5 5 5 f . . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.dart, mySprite.x, mySprite.y)
            myDart.setTrace()
            myDart.controlWithArrowKeys()
            single = 1
        }
    }
})
sprites.onOverlap(SpriteKind.dart, SpriteKind.target, function (sprite, otherSprite) {
    if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        info.changeScoreBy(10)
    }
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (single == 1) {
        myDart.throwDart()
        single = 0
        info.changeScoreBy(-1)
    }
})
let hundred = 0
let mySprite2: Sprite = null
let myDart: Dart = null
let single = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(10)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . b 5 5 b . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . b 5 5 5 5 5 b b . . . . . 
    . . b 5 5 5 5 5 5 5 b b b b b . 
    . . b a 5 5 5 5 5 5 5 b 5 d b . 
    . . f 4 d 5 f 1 d 5 b 5 5 b . . 
    . . c 4 4 5 f f 1 b 5 5 d b . . 
    . b 4 4 4 4 b f d 5 5 5 b d b b 
    b 4 4 4 4 4 4 5 b 5 5 d c d d b 
    . b 5 5 5 5 5 5 5 b c c d d d c 
    . b 5 5 5 5 5 5 5 d d d d d b c 
    . b d 5 5 5 5 5 d d d d d d c . 
    . . b b 5 5 5 d d d d d b c . . 
    . . . b b c c c c c c c c . . . 
    `, SpriteKind.Player)
forever(function () {
    if (info.score() == 0) {
        game.over(false)
    }
})
game.onUpdateInterval(500, function () {
    if (hundred < 1) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . 
            . . . f 2 5 5 5 5 5 5 5 2 f . . 
            . . f 2 5 4 4 4 4 4 4 4 5 2 f . 
            . . f 2 5 4 2 2 2 2 2 4 5 2 f . 
            . . f 2 5 4 2 2 2 2 2 4 5 2 f . 
            . . f 2 5 4 2 2 2 2 2 4 5 2 f . 
            . . f 2 5 4 2 2 2 2 2 4 5 2 f . 
            . . f 2 5 4 2 2 2 2 2 4 5 2 f . 
            . . f 2 5 4 4 4 4 4 4 4 5 2 f . 
            . . . f 2 5 5 5 5 5 5 5 2 f . . 
            . . . . f 2 2 2 2 2 2 2 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.target)
        scene.cameraFollowSprite(mySprite2)
        mySprite2.setPosition(7, 57)
        mySprite2.setBounceOnWall(true)
        mySprite2.setVelocity(0, 50)
        hundred += 1
    }
})
