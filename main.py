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


def on_button_pressed_ab():
    global auto
    auto = False
    strip.clear()
    strip.show()
    for zmurk in range (0,4):
        for i in range (0,4):
            strip.set_pixel_color(i, 0x701010)
        for i in range (4,8):
            strip.set_pixel_color(i, 0x101070)  
        strip.show()
        basic.pause(500)
        for i in range (0,4):
            strip.set_pixel_color(i, 0x000000)
        for i in range (4,8):
            strip.set_pixel_color(i, 0x701010)
        strip.show()
        basic.pause (500)
    auto=True
    


input.on_button_pressed(Button.AB, on_button_pressed_ab)

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
