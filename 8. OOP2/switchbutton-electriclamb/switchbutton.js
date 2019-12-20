function SwitchButton() {
    this.status = false;
    this.lamp;

    this.switchOff = function () {
        this.status = false;
        this.lamp.turnOff();
    }
    this.switchOn = function () {
        this.status = true;
        this.lamp.turnOn();
    }

    this.connectToLamp = function (electriclamp) {
        this.lamp = electriclamp;
    }
}

