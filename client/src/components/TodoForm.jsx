import { useState } from "react";


const TodoForm = () => {

    const [text, setText] = useState("");

    const onFormSubmit = (data) =>{
        
    }

    const onInputChange =(e)=>{
        setText(e.target.value);
    }

    return (
        <form className="form" action="" onSubmit={onFormSubmit}>
            <input placeholder="Enter new todo..." className="input" onChange={onInputChange}/>
        </form>
    );
};

export default TodoForm;
