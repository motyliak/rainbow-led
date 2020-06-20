def on_button_pressed_a():
    global auto
    auto = False
    strip.show()
    strip.rotate(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global auto
    auto = True   
input.on_button_pressed(Button.B, on_button_pressed_b)


auto = True
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.show_rainbow(1, 360)

def on_forever():
    if auto:
        strip.show()
        strip.rotate(1)
        basic.pause(300)
basic.forever(on_forever)
