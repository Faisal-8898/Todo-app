import Todo from '../model/Todo.js'

export const addNewTodo = async (req,res)=>{

    try{

        const newTodo = await Todo.create({
            data : req.body.data,
            createdAt : Date.now()
        })
    
        await newTodo.save();
        res.json(newTodo);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}