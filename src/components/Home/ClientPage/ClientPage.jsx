"use client";
import { RenderTable } from '@/components';
import { useDataGetter } from './data';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog';
import TodoForm from '../TodoForm';

export default function ClientPage() {

    /**
     * The columns for the table.
     * @type {Array}
     */
    const {
        columns,
        todoList,
        row,
        setRow,
        setTodosToLocalstorage,
        toast,
    } = useDataGetter();

    return (
        <div className='min-h-[100vh] flex items-center justify-center'>
            <div className='container mt-20'>

                {/* The form for adding and editing todos. */}
                <TodoForm
                    todoList={todoList}
                    setTodosToLocalstorage={setTodosToLocalstorage}
                    row={row}
                    setRow={setRow}
                />

                {/* The title of the page. */}
                <h2 className='mb-5 mt-20 font-bold text-[20px]'>Todo List</h2>

                {/* The table for the list of todos. */}
                <RenderTable
                    columns={columns}
                    list={todoList}
                    countOfRows={5}
                />

                {/* The toast component for showing messages. */}
                <Toast ref={toast} />

                {/* The confirm dialog for deleting todos. */}
                <ConfirmDialog />

            </div>
        </div>
    )
}
