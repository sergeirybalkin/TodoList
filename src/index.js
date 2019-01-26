import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'
import ItemStatusFilter from "./components/item-status-filter"
import './index.css'

const isLogged = true;
const loginBox = <span> Log in please</span>
const welcomeBox = <span>Welcome back!</span>

const App = () =>{

    const todoData= [
        {label: 'Drink Cofee', important: false, id:1},
        {label: 'Make Awesome App', important: true,id: 2},
        {label: 'Have a lunch', important: false, id:3},
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};


ReactDOM.render(<App/>,document.getElementById('root'));