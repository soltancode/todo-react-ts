import React, {FormEvent, ChangeEvent, useState} from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { v4 as uuidv4 } from 'uuid';

import { Row } from "./Row";
import { AddTodo } from "./AddTodo";
import { data } from "../todos";
import { Todo } from "../types";
import useDarkMode from "../hook/useDarkMode";

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState<string>("");

    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
        setTask("");
    }

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault();

        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false
        }
        task && handleAddTodo(todo);
    }

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        setTask(value);
    }

    const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos);
    }

    const [darkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    };

    return (
        <section className="h-screen flex items-center flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="max-w-md w-full p-3 bg-white dark:bg-slate-800 shadow overflow-hidden sm:rounded-lg space-y-8">
                <div className="flex justify-between">
                    <h1 className="font-medium dark:text-white">Todo App</h1>
                    <DarkModeSwitch
                        style={{ width: '20px', height: '20px' }}
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        size={120}
                    />
                </div>
                <AddTodo handleSubmitTodo={handleSubmitTodo}
                         handleChange={handleChange}
                         task={task}
                />
                <div className="h-80 overflow-scroll">
                    {todos.map((todo) => (
                        <Row key={todo.id}
                             todo={todo}
                             handleDeleteTodo={handleDeleteTodo}
                             handleCheckTodo={handleCheckTodo}
                        />
                    )).reverse()}
                </div>
            </div>
            <a href="https://soltancode.com" target="_blank">
                <p className="text-gray-400 font-medium text-xs mt-3">@soltancode</p>
            </a>
        </section>
    )
}