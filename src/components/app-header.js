import React from "react";
import './app-header.css'

const AppHeader  = ({toDO, done}) =>{

    return(  <div className="app-header">
        <h1>Todo List</h1>
        <h2>{toDO} more to do , {done} done</h2>
        </div>
    );
};

export default AppHeader;
