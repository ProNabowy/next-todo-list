import { useState } from "react";
import { FilterMatchMode } from 'primereact/api';
import { Column } from "primereact/column";

const useTable = () => {

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    return {
        filters,
        onGlobalFilterChange,
        globalFilterValue
    }

}

const data = (columns) => {

    return columns?.map((column, index) => {

        return <Column key={index} field={column?.field} sortable={column?.sortable} header={column?.header} className={column?.classNames} body={column?.template} />;

    })

};

const FilterFields = [
    'title',
    'description',
    'status'
]

export {
    useTable,
    data,
    FilterFields
}