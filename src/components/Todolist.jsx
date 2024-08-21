import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { nanoid } from 'nanoid';
import Todo from "./Todo";
import { useTodoStore } from "../store";
import './Todolist.css';

const Todolist = () => {
    const { t } = useTranslation();
    const [newTodo, setNewTodo] = useState('');
    const ref = useRef();
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const removeAllSelected = useTodoStore((state) => state.removeAllSelected);
    const removeTodo = useTodoStore((state) => state.removeTodo);
    const toggleCompleted = useTodoStore((state) => state.toggleCompleted);
    const toggleSelected = useTodoStore((state) => state.toggleSelected);
    const toggleSelectedAll = useTodoStore((state) => state.toggleSelectedAll);

    useEffect(() => {
        ref.current.focus();
    }, []);

    function handleChange(e) {
        const value = e.target.value;
        setNewTodo(value);
    }

    function handleCompleted(id) {
        toggleCompleted(id);
    }

    function handleDelete(id) {
        removeTodo(id);
    }

    function handleRemoveSelected() {
        removeAllSelected();
    }

    function handleSelectAll() {
        toggleSelectedAll();
    }

    function handleSelected(id) {
        toggleSelected(id);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTodo({ id: nanoid(), title: newTodo, completed: false });
        setNewTodo('');
    }

    return (
        <div className="Todolist">
            <form onSubmit={ handleSubmit }>
                <input ref={ ref } type='text' value={ newTodo } onChange={ handleChange } />
                <button type='submit' disabled={ newTodo.trim() === '' }>{ t('todolist.controls.add') }</button>
            </form>
            <div className='todo-filters'>
                <button disabled={ todos.length === 0 } onClick={ handleSelectAll }>{ t('todolist.controls.toggleSelectAll') }</button>
                <button disabled={ todos.filter(todo => todo.selected).length === 0 } onClick={ handleRemoveSelected }>{ t('todolist.controls.clearAllSelected') }</button>
            </div>
            <ul>
                { todos.map(todo => (
                    <Todo 
                        key={ todo.id } 
                        todo={ todo } 
                        handleCompleted={ handleCompleted }
                        handleDelete={ handleDelete }
                        handleSelected={ handleSelected }/>
                ))}
            </ul>
        </div>
    )
}

export default Todolist;