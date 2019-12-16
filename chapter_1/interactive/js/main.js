let todo = {
    todos:[],
    new(title) {
        let obj ={
            id:Date.now(),
            title: title,
            status:0,
            updateStatus(){
                if(this.status<2){
                    this.status++
                }
            }
        }
        this.todos.push(obj)
    },

    findById(id){
        return this.todos.filter(item =>{
            return item.id ===id
        })
    },
    findByStatus(status){
        return this.todos.filter(item =>{
            return item.status === status
        })
    },
    deleteById(id){
        this.todos.forEach( (item,index)=> {
            if(item.id ===id){
                this.todos.splice(index,1)
            }
        })
    },
    clear(){
        this.todos.length=0
    }

};

