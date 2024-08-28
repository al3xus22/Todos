import styles from './List.module.scss'
import ToDoInput from "../ToDoInput/ToDoInput.tsx";
import {useMemo, useState} from "react";
import Card from "../Card/Card.tsx";
import {FilterType} from "../../types/types.ts";
import TodoFooter from "../TodoFooter/TodoFooter.tsx";
import {todoStore} from "../../store/todoStore.ts";
import { observer } from 'mobx-react-lite';

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