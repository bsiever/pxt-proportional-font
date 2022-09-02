// tests go here; this will not be compiled when this package is used as a library

// TODO: enable tests (they crash for no reason :-( Bugs in compiler?)
//proportionalFont.showNumber(1234)
//proportionalFont.showNumber(1234, 100)
//proportionalFont.showString("test okay")
//proportionalFont.showString("test okay", 100)
// proportionalFont.showSpace(2)
// proportionalFont.showSpace(2, 100)
//basic.showNumber(proportionalFont.getWidthOfNumber(1234))
//basic.showNumber(proportionalFont.getWidthOfString("test okay"))
input.onButtonPressed(Button.A, function () {
    proportionalFont.setDirection(proportionalFont.DIRECTION.UpsideDown)
})
input.onButtonPressed(Button.AB, function () {
    proportionalFont.setDirection(proportionalFont.DIRECTION.LogoOnRight)
})
input.onButtonPressed(Button.B, function () {
    proportionalFont.setDirection(proportionalFont.DIRECTION.LogoOnLeft)
})
input.onGesture(Gesture.Shake, function () {
    proportionalFont.setDirection(proportionalFont.DIRECTION.Normal)
})
let count = 0
proportionalFont.setDirection(proportionalFont.DIRECTION.Normal)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    proportionalFont.showSpace(4, 150)
    proportionalFont.showString("Hello. ", 150)
    count += 1
    proportionalFont.showNumber(count, 150)
    proportionalFont.showSpace(4, 150)
})
