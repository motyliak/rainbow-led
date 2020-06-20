let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function on_forever() {
    strip.show()
    strip.rotate(1)
    basic.pause(100)
    strip.setBrightness(10)
})
