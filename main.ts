input.onButtonPressed(Button.A, function () {
    basic.showString("Wellcome")
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(87)
    basic.showString("Starting alarm in")
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        . . . . #
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        . . . . #
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        5000,
        5000,
        255,
        255,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        5000,
        5000,
        255,
        202,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        5000,
        5000,
        255,
        202,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        5000,
        5000,
        255,
        202,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 10; index++) {
        music.play(music.createSoundExpression(
        WaveShape.Square,
        5000,
        5000,
        255,
        202,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        basic.pause(500)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . #
        . # . # .
        . . . # .
        . # . # .
        . . . . #
        `)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showString("micro:bit starting")
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Asleep)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
music.setVolume(255)
basic.showLeds(`
    . # # # .
    # # . # #
    # # . # #
    # # . # #
    . # # # .
    `)
basic.forever(function () {
	
})
