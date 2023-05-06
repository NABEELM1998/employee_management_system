import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import EmployeeList from './Components/EmployeeList';
import Header from './Components/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route index element={<EmployeeList/>}></Route>
        <Route path='/' element={<EmployeeList/>}></Route>
        <Route path='addEmployee' element={<AddEmployee/>}></Route>
        <Route path='/employeeList' element ={<EmployeeList/>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
