import { TodoProps } from "../types";

export const Row = ({
        todo: {id, task, isCompleted},
        handleCheckTodo,
        handleDeleteTodo
   }: TodoProps) => {
    return (
        <div className="shadow rounded-lg p-3 mt-4 bg-gray-50 dark:bg-slate-700 flex justify-between">
            <div className="flex items-center">
                <input
                    id={'task-name-'+id}
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => handleCheckTodo(id)}
                /> <label className="ml-2 font-medium text-slate-800 dark:text-gray-50 text-sm" htmlFor={'task-name-'+id}>{ task }</label></div>
            <div className="">
                <button className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-2 py-1 text-sm leading-5 rounded-full font-semibold text-white" aria-label="Delete a todo" onClick={() => handleDeleteTodo(id)}>
                    X
                </button>
            </div>
        </div>
    )
}