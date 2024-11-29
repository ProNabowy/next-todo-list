import React from 'react';
import { InputSwitch } from "primereact/inputswitch";
import { useDataGetter } from './data';

/**
 * @description A form component for adding or updating todos
 * @param {{item: {title: string, description: string, status: string}, setItem: (item: {title: string, description: string, status: string}) => void, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void, row: {id: number}}}
 */
export default function TodoForm(props) {

    const {
        item,
        setItem,
        handleChange,
        handleSubmit,
        row
    } = useDataGetter(props);

    return (
        <form onSubmit={handleSubmit}>

            {/* A heading element for the form */}
            <h1 className='font-bold text-[30px] capitalize text-primary'>{row?.id ? `Update ${item?.title?.slice(0, 20)}` : "Add a new Todo"}</h1>

            {/* A grid container for the form fields */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-5 mt-10'>

                {/* A form field for the title */}
                <div>

                    {/* A label element for the title field */}
                    <label htmlFor="title">Title</label>

                    {/* An input element for the title field */}
                    <input
                        type="text"
                        onChange={handleChange}
                        value={item?.title}
                        name='title'
                        maxLength={50}
                        id="title"
                        required
                    />

                </div>

                {/* A form field for the description */}
                <div>

                    {/* A label element for the description field */}
                    <label htmlFor="description">Description</label>

                    {/* An input element for the description field */}
                    <input
                        type="text"
                        onChange={handleChange}
                        value={item?.description}
                        name='description'
                        id="description"
                        maxLength={50}
                    />

                </div>

                {/* A form field for the status */}
                <div>

                    {/* A label element for the status field */}
                    <label htmlFor="status">Status</label>

                    {/* An input switch element for the status field */}
                    <InputSwitch
                        /* The checked state of the switch is determined by the status field of the item */
                        checked={item?.status === 'completed'}
                        inputId='status'
                        /* The onChange handler updates the item state with the new status */
                        onChange={(e) => setItem(perv => ({ ...perv, status: e.value ? 'completed' : 'pending' }))} />

                </div>

            </div>


            {/* A submit button for the form */}
            <button type='submit' className='mt-5 ml-auto block bg-primary text-white p-2 px-10 rounded-sm font-medium'>{row?.id ? "Update" : "Add"}</button>

        </form>
    )
}
