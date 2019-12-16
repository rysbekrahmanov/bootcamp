let lift = {
    currentFloor: 0,
    maxFloors: 16,
    goUp: function() {
        if (this.currentFloor < this.maxFloors) {
            this.currentFloor++;
        } else {
            console.log("You're on the top")
        }
    },
    goDown: function() {
        if (this.currentFloor >  0) {
            this.currentFloor--;
        } else {
            console.log("You're on the bottom")
        }
    },
    printCurrentFloor: function() {
        console.log(this.currentFloor);
    }
};