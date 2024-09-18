input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (input.temperature() > 25) {
        basic.setLedColor(0xff0000)
        basic.showNumber(input.temperature())
    } else if (input.temperature() < 15) {
        basic.setLedColor(0x0000ff)
        basic.showNumber(input.temperature())
    } else {
        basic.setLedColor(0x00ff00)
        basic.showNumber(input.temperature())
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (input.lightLevel() > 90) {
        basic.setLedColor(0xffff00)
        basic.showNumber(input.lightLevel())
    } else if (input.lightLevel() < 50) {
        basic.setLedColor(0x65471f)
        basic.showNumber(input.lightLevel())
    } else {
        basic.setLedColor(0xb09eff)
        basic.showNumber(input.lightLevel())
    }
})
