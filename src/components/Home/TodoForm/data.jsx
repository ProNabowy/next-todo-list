import { useEffect, useState } from "react";
import { defaults } from "../ClientPage/data";


/**
 * This function takes in the props from the parent component and returns an object with the states and functions that can be used by the child component.
 * The states are:
 *      - item: the current todo item
 *      - row: the current row todo item
 * The functions are:
 *      - handleChange: handles the change of the input field
 *      - handleSubmit: handles the submission of the form
 * @param {Object} props - The props from the parent component
 * @property {Object} row - The current row todo item
 * @property {Function} setRow - The function to set the current row todo item
 * @property {Array} todoList - The list of todo items
 * @property {Function} setTodosToLocalstorage - The function to set the list of todo items to local storage
 * @returns {Object} - The object with the states and functions
 */
const useDataGetter = (props) => {

    const {
        row,
        setRow,
        todoList,
        setTodosToLocalstorage
    } = props;

    const [item, setItem] = useState(row || defaults);

    /**
     * This useEffect hook is used to set the item state to the current row todo item when the row prop changes.
     */
    useEffect(() => {
        setItem(row);
        return () => { };
    }, [row]);

    /**
     * This function is used to handle the change of the input field. It takes in the event object and uses the value and name of the input field to update the item state.
     * @param {Object} e - The event object
     */
    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        const generateRandomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        setItem(perv => ({ ...perv, id: perv?.id || generateRandomId, [name]: value }));
    }


    /**
     * This function is used to handle the submission of the form. It takes in the event object and prevents the default action of the form. It then checks if the row prop has an id. If it does, it updates the item in the todoList by finding the item with the same id and updating it. If it doesn't, it adds the item to the todoList. Finally, it resets the item state and the row prop to the default values.
     * @param {Object} e - The event object
     */
    const handleSubmit = (e) => {

        e.preventDefault();

        if (row?.id) setTodosToLocalstorage(todoList?.map((todo) => todo?.id === item?.id ? item : todo) || []);
        else setTodosToLocalstorage([...todoList, item])

        setItem(defaults);
        setRow(defaults);
    }

    return {
        item,
        setItem,
        handleChange,
        handleSubmit,
        row
    }
};

export {
    useDataGetter
}