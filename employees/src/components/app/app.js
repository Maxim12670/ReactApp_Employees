import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import './app.css';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

  const data = [
    {name: "Акайкин Максим", salary: 500, increase: false, id: 1},
    {name: "Желнов Никита", salary: 600, increase: false, id: 2},
    {name: "Лунев Лев", salary: 900, increase: true, id: 3}
  ];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>

        </div>

        <EmployeesList data={data}/>    
        <EmployeesAddForm/>

    </div>
  );
}

export default App;

