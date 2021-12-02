scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles24, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
})
let mySprite = sprites.create(img`
    f f f . . . . f f f . . . . 
    f d d f . . f d d f . . . . 
    f b d d f f d d b f . . . . 
    f 3 b d d d d b 3 f . . . . 
    f b 3 d d d d 3 b f . . . . 
    f d d d d d d d d f . . . . 
    f d f d 3 d f d d f . f f f 
    f d d d d d d d d f . f d f 
    f b d 9 d 9 d 9 d c . f d f 
    . f 9 c 9 c 9 c 9 f f f d f 
    . f c d c d c d c d d d d f 
    . f d d d d d d d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath6)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
