class Worker {
    constructor(name,surname,rate,days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getName(){
        return this.name
    }
    getSurname(){
        return this.surname
    }
    getRate(){
        return this.rate
    }
    getDays(){
        return this.days
    }
    getSalary(){
        return this.rate*this.days
    }
}

let worker = new Worker('Ivan','Ivanov',10, 31);

console.log(worker.getName()); 
console.log(worker.getSurname()); 
console.log(worker.getRate());
console.log(worker.getDays()); 
console.log(worker.getSalary())