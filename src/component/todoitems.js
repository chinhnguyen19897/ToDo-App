import React, { Component } from 'react';
import './todoitems.css';
import classNames from 'classnames';
import checkImg from '../img/tick.svg';
import checkCompleteImg from '../img/tick-done.svg';

class TodoItem extends Component {
    
    
    render(){
        const { items, onClick } = this.props;
        let url = checkImg;
        if(items.isComplete) {
            url = checkCompleteImg;
        }

        return (
            <div onClick={onClick} className={classNames('Todoitem', {
                'Todoitem-complete': items.isComplete
            })}>
            
            <img src={url} width={32}/>
        <p>{this.props.items.title}</p>
        </div>
        )
    };
}

export default TodoItem;