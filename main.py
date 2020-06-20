strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.show_rainbow(1, 360)


def on_forever():
    strip.show()
    strip.rotate(1)
    basic.pause(100)
    
basic.forever(on_forever)


