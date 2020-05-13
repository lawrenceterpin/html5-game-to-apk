export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);

        // this.setBounce(0.2);
        this.setCollideWorldBounds(true);

        this.body.setSize(60, 175);
        this.body.setOffset(0, 0);

        // Animations du joueur
        this.playerWalkAnimation(config.scene);

        this.vitesseJoueur = 150;
        this.jump = false;
        this.anims.play('idle', true);
    }

    playerWalkAnimation(scene) {

        // Animation de déplacement
        scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNames('player', { prefix: 'walk', start: 1, end: 11 }),
            frameRate: 15,
            repeat: -1
        });

        // Animation de l'arrêt
        scene.anims.create({
            key: 'idle',
            frames: [{ key: 'player', frame: 'stand' }],
            frameRate: 12,
        });

        // Animation du saut
        scene.anims.create({
            key: 'jump',
            frames: scene.anims.generateFrameNames('player', { prefix: 'jump', start: 1, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
    }

    update(cursorKeys) {

        if (cursorKeys['right'].isDown) {
            this.body.setVelocityX(this.vitesseJoueur);
            this.anims.play('walk', true);
            this.flipX = false; // use the original sprite looking to the right

            if (cursorKeys['up'].isDown) {
                this.anims.play('jump', true);
            }
        }
        else if (cursorKeys['left'].isDown) {
            this.body.setVelocityX(-this.vitesseJoueur);
            this.anims.play('walk', true); // walk left
            this.flipX = true; // flip the sprite to the left


            if (cursorKeys['up'].isDown) {
                this.anims.play('jump', true);
            }
        }
        else {
            if (this.body.onFloor()) {
                this.body.setVelocityX(0);
                this.anims.play('idle', true);
            }
        }

        // saut 
        if (cursorKeys['up'].isDown && this.body.onFloor()) {
            this.jump = true;
            this.body.setVelocityY(-500);
            this.anims.play('jump', true);
        }
    }
}