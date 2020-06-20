input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    auto = false
    strip.show()
    strip.rotate(1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    auto = true
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    let i: number;
    
    auto = false
    strip.clear()
    strip.show()
    for (let zmurk = 0; zmurk < 4; zmurk++) {
        for (i = 0; i < 4; i++) {
            strip.setPixelColor(i, 0x701010)
        }
        for (i = 4; i < 8; i++) {
            strip.setPixelColor(i, 0x101070)
        }
        strip.show()
        basic.pause(500)
        for (i = 0; i < 4; i++) {
            strip.setPixelColor(i, 0x000000)
        }
        for (i = 4; i < 8; i++) {
            strip.setPixelColor(i, 0x701010)
        }
        strip.show()
        basic.pause(500)
    }
    auto = true
})
let auto = true
let strip : neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function on_forever() {
    if (auto) {
        strip.show()
        strip.rotate(1)
        basic.pause(300)
    }
    
})
