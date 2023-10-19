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
        { name: "Акайкин Максим", salary: 500, increase: false, id: 1 },
        { name: "Желнов Никита", salary: 600, increase: false, id: 2 },
        { name: "Лунев Лев", salary: 900, increase: true, id: 3 }
      ]
    }
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

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />

        </div>

        <EmployeesList data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm />

      </div>
    )
  }
}

export default App;

