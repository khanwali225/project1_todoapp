
"use client"

import { useListStyles } from '@chakra-ui/react';
import { truncate } from 'fs';
import React, { useState } from 'react'

export default function Todo() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([
        { todoText: "todo 1", completed: false },
        { todoText: "todo 2", completed: true },
        { todoText: "todo 3", completed: true },
        { todoText: "todo 4", completed: false },
    ]);

const onClickHandler = (myElm: any) => {
 console.log("myElm", myElm)

 //map runs on array, and returns an array
 const newTodos = todos.map(todo => {
    console.log("todo:", todo);
    if (todo.todoText == myElm.todoText){
        todo.completed = !todo.completed // if its false, make it true and vice versa
    }
    return todo;
 });
 console.log(newTodos);
  setTodos(newTodos)
};
const addTodo = () => {
 const newTodo = { todoText: todo, completed: false }
 const newTodos = [...todos, newTodo]
 setTodos(newTodos)
 setTodo(" ")
};

const deleteTodo = (myTodo: any ) => {
    const newTodos = todos.filter(todo => {
        if (todo.todoText == myTodo.todoText) return false;
        return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
     setTodos(newTodos);
}
     return (
    <>
    <div>Todo</div>
    <input placeholder="add todo text" value={todo} onChange={(e) => {setTodo(e.target.value)}}/>
    <button onClick={addTodo}>Add</button>
     <ul>
        {todos.map((elm) => {
            return (
            <li style={{ color: elm.completed ? "green" : "orange", fontStyle:'oblique', listStyle: "none",}} key={elm.todoText}>
            <input type="checkbox" checked={elm.completed} onChange={() =>{onClickHandler(elm)}} />
            {elm.todoText}
            <button onClick={() => {deleteTodo(elm)}}>{" "}Delete</button>
            </li>
            );
        })}
     </ul>
    </>
  );
}
