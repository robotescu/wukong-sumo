function Go_forward () {
    wuKong.setAllMotor(-100, -100)
}
let dist = 0
basic.showIcon(IconNames.Heart)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.pause(5000)
basic.forever(function () {
    dist = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0)
    if (dist > 2 && dist < 10) {
        while (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            Go_forward()
        }
    } else if (dist >= 10) {
        while (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0 && dist >= 10) {
            if (Math.randomBoolean()) {
                wuKong.setAllMotor(-100, -50)
            } else {
                wuKong.setAllMotor(-50, -100)
            }
            basic.pause(100)
            dist = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0)
        }
    }
    if (!(pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0)) {
        wuKong.setAllMotor(100, -100)
        basic.pause(1000)
    }
})
