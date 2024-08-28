import { makeAutoObservable } from "mobx";
import {ITodo} from "../types/types";

interface ITodoStore {
    todos: ITodo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
    removeCompletedTodos: () => void;
    readonly notCompletedTodosCount: number;
}

export const createTodoStore = (): ITodoStore => {
    const store = {
        todos: [] as ITodo[],
        addTodo(text: string) {
            store.todos.push({ id: Date.now(), text, completed: false })
        },
        toggleTodo(id: number) {
            const todo = store.todos.find((todo) => todo.id === id)
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        deleteTodo(id: number) {
            store.todos = store.todos.filter((todo) => todo.id !== id);
        },

        editTodo(id: number, text: string) {
            const todo = store.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },

        removeCompletedTodos() {
            store.todos = store.todos.filter((todo) => !todo.completed)
        },
        get notCompletedTodosCount() {
            return store.todos.filter((todo: ITodo) => !todo.completed).length
        }
    }

    return makeAutoObservable(store)
}

export const todoStore = createTodoStore()

