import React from "react";
import { useState } from 'react';


function Todo({ todo, comp, del, edit }) {

    const [editToggle, setEditToggle] = useState(false);
    const [input, setInput] = useState('');

    const getInput = (input) => {
        setInput(input.currentTarget.value);
    };

    const onSubmitEdit = (e) => {
        if (input === ''){
            alert('Todo can not be empty!')
        } else {
            e.preventDefault();
            edit(input, todo.id);
            setInput('');
            setEditToggle((prevToggle) => !prevToggle);
        };
    };

    const onCancel = (e) => {
        e.preventDefault();
        setInput('');
        setEditToggle((prevToggle) => !prevToggle);
    }

    const onEditClick = () => {
        setEditToggle((prevToggle) => !prevToggle);
    }

    const buttonStyle = {
        backgroundColor: 'rgb(230, 90, 90)',
        borderRadius: '50%',
        marginLeft: '10px'
    };
    
    return (

        <div style = {{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            { !editToggle ? 
                <>

                    <input 
                    onChange = {() => comp(todo.id)} 
                    value = {todo.isCompleted} 
                    checked = {todo.isCompleted} 
                    type = 'checkbox'
                    required>
                    </input>
                    {todo.text}
                    <button 
                        onClick = {() => del(todo.id)}
                        className = 'del-button'
                        style = {buttonStyle}>
                        X
                    </button>
                    <button
                        className = 'edit-button'
                        onClick = {onEditClick}
                        disabled={todo.isCompleted}>
                        Edit
                    </button>

                </>

                : 

                <>
                    <form>
                        <input 
                            className = 'edit-field' 
                            type = 'text'
                            onChange = {getInput}
                            required>
                        </input>
                        <button
                            onClick = {onSubmitEdit}
                            className = 'update-button'
                            style = {{backgroundColor:"rgba(4, 197, 4, 0.699)"}}>
                            Update
                        </button>
                        <button 
                            onClick = {onCancel}
                            className = 'cancel-button'
                            style = {{backgroundColor:"rgba(4, 197, 4, 0.699)"}}>
                            Cancel
                        </button>
                    </form>
                </>
            }
        </div>

    );
};

export default Todo;
