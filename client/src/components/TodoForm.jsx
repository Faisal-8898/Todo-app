import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";


const TodoForm = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (data) =>{
        data.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange =(e)=>{
        setText(e.target.value);
        console.log(e.target.value);
    }

    return (
        <form className="form" action="" onSubmit={onFormSubmit}>
            <input placeholder="Enter new todo..." className="input" onChange={onInputChange}/>
        </form>
    );
};

export default TodoForm;
