import React, { Component } from 'react'
import TodoItem from './TodoItem';
class TodoList extends Component {
    render() {
        return (
            <section>
                <h1>todo list</h1>
             <TodoItem/>
            </section>
        )
    }
}
export default  TodoList