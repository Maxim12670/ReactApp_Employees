import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {

    const elements = data.map(item => {
        const {id, ...itemPromis} = item;
        return(
            <EmployeesListItem key={id} {...itemPromis}
                                onDelete={() => onDelete(id)}
                                onToggleIncrease={() => onToggleIncrease(id)}
                                onToggleLike={() => onToggleLike(id)}/>
        )
    });

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;