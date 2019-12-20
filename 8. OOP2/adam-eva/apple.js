function Apple() {
    this.weight = 10;

    this.descrease = function() {
        if (!this.isEmpty()) {
            this.weight --;
        }
    }

    this.isEmpty = function() {
        return this.weight === 0;
    }

    this.getWeight = function() {
        return this.weight;
    }
}