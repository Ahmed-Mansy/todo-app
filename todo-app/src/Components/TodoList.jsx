import React from 'react'
import TodoItem from './TodoItem';

const TodoList = (props) => {

    const { todos } = props;

    // console.log(todos);


    return (
        <>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}

        </>


    )
}

export default TodoList
