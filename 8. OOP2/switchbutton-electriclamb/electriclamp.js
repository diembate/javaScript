function ElectricLamp() {

    this.status = false;

    this.turnOn = function () {
        this.status = true;
    }

    this.turnOff = function () {
        this.status = false;
    }

    this.show = function() {
        console.log("Bong Den dang ", this.status?"sang":"tat");
    }
}