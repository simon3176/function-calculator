input.onButtonPressed(Button.A, function () {
    NOMERO_10 += 1
    basic.showNumber(NOMERO_10)
})
function NOMERO_SUBTRACT (NOM1: number, NOM2: number) {
    SUM_NOMERO = NOM2 - NOM1
    return SUM_NOMERO
}
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(NOMERO_SUBTRACT(NOMERO_20, NOMERO_10))
})
function NOMERO_ADD (NOM1: number, NOM2: number) {
    SUM_NOMERO = NOM1 + NOM2
    return SUM_NOMERO
}
input.onButtonPressed(Button.B, function () {
    NOMERO_10 += -1
    basic.showNumber(NOMERO_10)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(NOMERO_ADD(NOMERO_10, NOMERO_20))
})
input.onGesture(Gesture.Shake, function () {
    NOMERO_20 = NOMERO_10
})
let NOMERO_20 = 0
let SUM_NOMERO = 0
let NOMERO_10 = 0
NOMERO_10 = 0
basic.showNumber(NOMERO_10)
basic.forever(function () {
	
})
