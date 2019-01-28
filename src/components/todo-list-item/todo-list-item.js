import React, {Component} from 'react';
import './todo-list-item.css'


export default class TodoListItem extends Component{

    constructor() {
        super()
      this.state ={
          done: false
      };

    }

    onLableClick= () =>{
    this.setState({
        done:true
    });
}

        render() {
            const { label } = this.props;
            const { done, important } = this.state;

            let classNames = 'todo-list-item';
            if (done) {
                classNames += ' done';
            }


            return (
                <span className={classNames}>
        <span
            className="todo-list-item-label"
            onClick={ this.onLableClick }>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"

                 onClick={this.onLableClick}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
            )
        }};