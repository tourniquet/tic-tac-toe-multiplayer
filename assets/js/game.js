/* globals Phaser */

let game = new Phaser.Game(560, 560, Phaser.AUTO)

game.state.add('boot', bootState)
game.state.add('load', loadState)
game.state.add('menu', menuState)
game.state.add('play', playState)
game.state.add('win', winState)
game.state.add('lose', loseState)
game.state.add('draw', drawState)

game.state.start('boot')
