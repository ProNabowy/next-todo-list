import { DataTable } from 'primereact/datatable';
import { FilterFields, data, useTable } from './data';

export default function RenderTable({ columns, list }) {

    const {
        filters,
        onGlobalFilterChange,
        globalFilterValue
    } = useTable();

    return (
        <div className='relative'>

            <div className="w-[300px] mb-10">

                <label htmlFor="search">Search</label>
                <input
                    id="search"
                    placeholder='Search By anything'
                    value={globalFilterValue}
                    className="w-full h-full"
                    onChange={onGlobalFilterChange}
                />

            </div>

            <DataTable
                value={list}
                filters={filters}
                globalFilterFields={FilterFields}
                paginator={(list?.length > (7)) ? true : false}
                rows={7}
                dataKey="id"
                emptyMessage={<p className='text-center capitalize font-medium'>there is no Todos</p>}>

                {data(columns)}

            </DataTable>

        </div>
    )

}
