class Worker {
    constructor(rate,days){
        this.rate = rate;
        this.days = days;
    }
 
    getRate(){
        return this._rate
    }
    getDays(){
        return this._days
    }
    getSalary(){
        return this._rate*this._days
    }
    setRate(val){
        this._rate= val*2
    }
    setDays(val){
        this._days = val-21
    }
}

let worker = new Worker(10,31);


// console.log(worker.getRate()); 
// console.log(worker.getDays()); 
// console.log(worker.getSalary())

worker.setRate(10);
worker.setDays(31);
console.log(worker.getSalary());