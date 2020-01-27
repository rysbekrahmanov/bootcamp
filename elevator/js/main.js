const elevator = {
    floor:1,
    minFloor:1,
    maxFloor: 9,
    floorCount() {
        return Math.abs(this.minFloor-this.maxFloor)+1
    },

    printFloor(){
        console.log(`lift na ${this.floor} etaje`)
    },
    upOneFloor(){
        if(this.floor < this.maxFloor){
            this.floor++;
            console.log("▲▲▲▲▲▲▲▲▲▲")
            this.printFloor();
        }else{
            console.log('err')
        }
    },
    downOneFloor(){

        if(this.floor > this.minFloor){
            this.floor--;
            console.log("▼▼▼▼▼▼▼▼ ");
            this.printFloor()
        }else{
            console.log("err")
        }

    },

    toFloor(floor){
        while(this.floor !== floor){
            if(floor > this.floor && floor <= this.maxFloor){
                this.upOneFloor();
            }else if (floor < this.floor && floor >=this.minFloor){
                this.downOneFloor();
            }else{
                console.log("err");
                return;
            }
        }
    },
    render(){
        let elev = $(".elevator");
        this.floorHeight = parseFloat(elev.css("height"));
        $(".house").css("height", this.floorHeight*this.floorCount()+"px")

    }
}