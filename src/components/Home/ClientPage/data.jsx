import { useRef, useState } from "react";
import { confirmDialog } from 'primereact/confirmdialog';
import Image from "next/image";
import pen from '@/public/pen.svg';
import trash from '@/public/trash.svg';

const defaults = {
    title: '',
    description: '',
    status: "pending"
};

/**
 * This hook is used to manage the state of the todo list and the
 * current row of the table. It also provides a function to set
 * the todo list to local storage and a function to get the todo
 * list from local storage.
 *
 * @returns {Object} An object with the following properties:
 *  - columns: An array of objects with the column headers and
 *    the template for each column.
 *  - todoList: An array of objects with the todo items.
 *  - setTodoList: A function to set the todo list.
 *  - row: An object with the current row of the table.
 *  - setRow: A function to set the current row of the table.
 *  - toast: A ref to the toast component.
 *  - setTodosToLocalstorage: A function to set the todo list to
 *    local storage.
 */
const useDataGetter = () => {

    const toast = useRef(null);

    const [todoList, setTodoList] = useState(
        // Get the todo list from local storage
        JSON.parse(localStorage.getItem('todos')) || []
    );

    const [row, setRow] = useState(defaults);

    /**
     * This function is used to set the todo list to local storage.
     * It takes in the updated todo list and sets the item in local
     * storage with the key 'todos'.
     *
     * @param {Array} updatedItems - The updated todo list.
     */
    const setTodosToLocalstorage = (updatedItems) => {
        setTodoList(updatedItems);

        const stringifiedTodos = JSON.stringify(updatedItems);
        return localStorage.setItem('todos', stringifiedTodos);
    }

    /**
     * This function is used to create a template for the actions
     * column of the table. It takes in the row and returns a
     * component with two buttons, one to edit the row and one to
     * delete the row.
     *
     * @param {Object} row - The current row of the table.
     */
    const useActionBodyTemplate = (row) => {

        const confirm = () => {
            return confirmDialog({
                message: 'Do you want to delete this todo item?',
                header: `Delete ${row?.title?.slice(0, 20)}`,
                defaultFocus: 'reject',
                acceptClassName: 'p-button-danger',
                accept
            });
        };

        const accept = () => {
            toast.current.show({ severity: 'success', summary: 'Confirmed', detail: `${row?.title?.slice(0, 20)} deleted`, life: 3000 });
            setTodosToLocalstorage(todoList?.filter(todo => todo?.id !== row?.id));
            // To make sure form is empty after deleting
            setRow(defaults);
        }

        return (
            <div className="flex items-center gap-5">
                <Image
                    src={pen}
                    className="cursor-pointer"
                    width={20}
                    onClick={_ => setRow(row)}
                />
                <Image
                    src={trash}
                    className="cursor-pointer"
                    width={20}
                    onClick={confirm}
                />
            </div>
        )
    };

    const columns = [
        { field: "title", header: "Title", sortable: true, template: (row) => <p className="row">{row?.title}</p> },
        { field: "description", header: "Description", sortable: true, template: (row) => <p className="row">{row?.description}</p> },
        { field: "status", header: "Status", sortable: true, template: (row) => <p className="capitalize row w-fit p-1 min-w-[120px] text-center rounded-md text-white" style={{ background: row?.status === 'completed' ? 'var(--primary-color)' : 'linear-gradient(91deg, #FFB800 17.4%, #FF8A00 86.23%)' }}>{row?.status}</p> },
        { field: "actions", header: "Actions", template: useActionBodyTemplate },
    ];

    return {
        columns,
        todoList,
        row,
        setRow,
        toast,
        setTodosToLocalstorage
    }
}
export {
    useDataGetter,
    defaults,
}