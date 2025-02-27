import React, { useState } from 'react'

const TodoForm = (props) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    // const {addNewTodo} = props
    const passToApp = () => {

        props.addNewTodo({ id: Date.now(), title, desc });
        setTitle("");
        setDesc("");
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="title">Enter Todo Title</label>
                <input type="text" id='title' className='form-control mt-2 p-2' value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div className="form-group mt-4">
                <label htmlFor="desc">Enter Todo Description</label>
                <textarea rows={6} type="text" id='desc' className='form-control mt-2' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
            </div>
            <div className="text-center">
                <button className='btn btn-success px-5 py-3 mt-4' onClick={passToApp} >Save</button>
            </div>
        </div>
    )
}

export default TodoForm
