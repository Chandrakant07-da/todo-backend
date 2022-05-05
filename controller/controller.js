const todoModule = require('../model/item_model')

exports.showIndex=(req, res)=>{
     res.send("Running Node API")
}

exports.addAlltodo = (req, res)=>{
     const post =new todoModule({
          todoName:req.body.todoName,
          todoDescription:req.body.todoDescription
     })
     post.save()
     .then(data =>{res.send(data)})
     .catch(err=>{res.send(err)})
}
