import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Акайкин Максим", salary: 500, increase: false, like: true, id: 1 },
                { name: "Желнов Никита", salary: 600, increase: false, like: false, id: 2 },
                { name: "Лунев Лев", salary: 900, increase: true, like: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        }
        this.maxIndex = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArray = [...before, ...after];

            return {
                data: newArray
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxIndex++
        }
        if(name.length > 3 && salary > 0){
            this.setState(({ data }) => {
                const newArray = [...data, newItem];
                return {
                    data: newArray
                }
            })
        }
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldItem = data[index];
            const newItem = {...oldItem, increase: !oldItem.increase};
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return {
                data: newArray
            }
        })
    }

    onToggleLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldItem = data[index];
            const newItem = {...oldItem, like: !oldItem.like};
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            
            return {
                data: newArray
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term} = this.state
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter />

                </div>

                <EmployeesList data={visibleData}
                            onDelete={this.deleteItem} 
                            onToggleIncrease={this.onToggleIncrease}
                            onToggleLike={this.onToggleLike}/>
                <EmployeesAddForm onAdd={this.addItem} />

            </div>
            )
        }
}

export default App;