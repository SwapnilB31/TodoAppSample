import {useState} from 'react';
import TodoItem from './TodoItem';

export default function TodoApp() {
    const [todos,setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState('');


    const addTodo = () => {
        const newItem = {
            label: newTodo,
            checked: false
        }

        setTodos([...todos,newItem]);
        setNewTodo('');
    }

    console.log(todos)

    return (
        <>
         {
            todos.map((todo,index) => (
                <TodoItem
                key={index+''}
                    checked={todo.checked}
                    label={todo.label}
                    setChecked={() => {
                        setTodos(prev => {
                            return prev.map((val,i) => {
                                if(i === index) {
                                    return {
                                        label: val.label,
                                        checked: !val.checked
                                    }
                                } else return {...val}
                            })
                        })
                    }}
                />
            ))
         }
         <input type="text" placeholder="Add your Todo" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
         <button onClick={addTodo}>Add Todo</button>   
        </>
    )
}