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


export const getAllTodos = async(req ,res) =>{
    try{

        const todos = await Todo.find({}).sort({'createdAt' : -1})
        return res.status(200).json(todos);
    }
    catch(error){
        return res.status(500).json(error.message);
    } 
}

export const toggleTodoDone = async(req ,res) =>{
    try{

        const todoRef = await Todo.findById(req.params.id);

        const todo = await Todo.findOneAndUpdate(
            
                {_id : req.params.id},
                {done : !todoRef.done}
            
        );

        await todo.save();
        res.status(200).json(todo);
    }
    catch(error){
        return res.status(500).json(error.message);
    } 
}

export const updateTodoo = async(req ,res) =>{
    try{

        await Todo.findOneAndUpdate(
            
                {_id : req.params.id},
                {data : req.body.data}
            
        );
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    }
    catch(error){
        return res.status(500).json(error.message);
    } 
}