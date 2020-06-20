input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    auto = false
    strip.show()
    strip.rotate(1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
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
