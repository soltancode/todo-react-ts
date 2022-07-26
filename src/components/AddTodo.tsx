import { AddTodoProps } from "../types";
import {ReactComponent as PlusIcon} from "../assets/svg/plus.svg";

export const AddTodo = ({handleSubmitTodo, task, handleChange}: AddTodoProps) => {
    return (
        <form onSubmit={handleSubmitTodo} className="flex">
            <input placeholder="New Task" className="h-10 px-3 py-2 bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-500 border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block w-full rounded-tl-lg rounded-bl-lg sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" id="add-todo" type="text" name="task" value={task} onChange={handleChange}/>
            <button type="submit"
                    aria-label="Add todo"
                    className="h-10 bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-tr-lg rounded-br-lg font-semibold text-white">
                Add
            </button>
        </form>
        )
}