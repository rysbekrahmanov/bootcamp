const ObjectID =require("mongodb").ObjectID;

module.exports = function(app, db){
    app.get('/todos', (req, res)=>{
        db.collection('todos').find({}).toArray((err,data)=>{
            if(err){
                res.send({ 'error': 'An error has occurred'});
            } else {
                res.send(JSON.stringify(data))
            }
        })
    })

    app.post('/new-todo', (req, res)=>{
        db.collection('todos').insertOne(req.body, (err, result)=>{
            if(err){
                res.send(err);
            }else{
                db.collection('todos').find({}).toArray((err,data)=>{
                    if(err){
                        res.send({ 'error': 'An error has occurred'});
                    } else {
                        res.send(JSON.stringify(data))
                    }
                })
            }
        })
    })
}