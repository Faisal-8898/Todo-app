import { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
import { useDispatch,useSelector   } from "react-redux";
const Todos = () =>{
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    console.log(todos);
    useEffect(()=>{
        dispatch(getAllTodos());
    },[])
    return (
        <article>
            <ul>
                {
                    todos.map(todo =>(
                        <li>{todo.data}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;