import React from 'react'

const TodoItem = (props) => {

    const { todo } = props;
    
    return (

        <div className="todoList mt-4">
            <div className="alert alert-light d-flex justify-content-between ">
                <div className="tit">
                    <h4>{todo.title}</h4>
                    <p>{todo.desc}</p>
                </div>
                <i className="fa-solid fa-trash fs-4"></i>

            </div>
        </div>

    )
}

export default TodoItem
