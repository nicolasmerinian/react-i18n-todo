import { nanoid } from 'nanoid';
import { create } from 'zustand';

const initialValues = [
    { id: nanoid(), title: 'Programming & learn!', completed: true, selected: false },
    { id: nanoid(), title: 'Clean my room', completed: false, selected: false },
    { id: nanoid(), title: 'Cook dinner', completed: false, selected: false },
];

export const useTodoStore = create((set) => ({
    newTodo: '',
    todos: initialValues,
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    removeTodo: (todoId) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== todoId)})),
    removeAllSelected: () => set((state) => ({todos: state.todos.filter((todo) => !todo.selected)})),
    toggleCompleted: (todoId) => set((state) => {
        return {
            todos: state.todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    }),
    toggleSelected: (todoId) => set((state) => {
        return {
            todos: state.todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.selected = !todo.selected;
                }
                return todo;
            })
        }
    }),
    toggleSelectedAll: () => set((state) => {
        const selected = state.todos[0].selected;
        return {
            todos: state.todos.map((todo) => {
                todo.selected = !selected;
                return todo;
            })
        }
    }),
    setNewTodo: (todo) => set((state) => ({ newTodo: todo })),
}));

