import styles from './List.module.scss'
import ToDoInput from "../ToDoInput/ToDoInput";
import {useMemo, useState} from "react";
import Card from "../Card/Card";
import {FilterType} from "../../types/types";
import TodoFooter from "../TodoFooter/TodoFooter";
import {todoStore} from "../../store/todoStore";
import { observer } from 'mobx-react-lite';
import React from 'react';

const List = observer(() => {
    const { todos, addTodo, removeCompletedTodos, notCompletedTodosCount } = todoStore
    const [newTodo, setNewTodo] = useState('')
    const [activeFilter, setActiveFilter] = useState<FilterType>(FilterType.ALL)

    // Добавить задачу
    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo)
            setNewTodo('')
        }
    }

    // Фильтр задач
    const filterTodos = useMemo(() => {
        if (activeFilter !== FilterType.ALL) {
            const isCompeted = activeFilter === FilterType.COMPLETED
            return todos.filter(todo => todo.completed === isCompeted)
        } else {
            return todos
        }
    }, [activeFilter, todos])

    return (
        <section className={styles.listContainer}>
            <div className={styles.list}>
                <ToDoInput value={newTodo} onChange={setNewTodo} handleAdd={handleAddTodo} />
                <div className={styles.cardsContainer}>
                    {filterTodos.map(todo => (
                        <Card
                            key={todo.id}
                            id={todo.id}
                            data={todo}
                        />
                    ))}
                </div>
                <TodoFooter
                    notCompletedTodos={notCompletedTodosCount}
                    filter={activeFilter}
                    changeFilter={setActiveFilter}
                    clearTodos={removeCompletedTodos}
                />
            </div>
        </section>
    )
})

export default List