import { useReducer } from 'react';
import { EmployeeContext } from '../context'
import reducer from '../reducer';
import EmployeeAddForm from '../EmployeeAddForm'
import EmployeeList from '../EmployeeList'
import { EmployeeType, EmployeeContextType, EmployeeStateType } from '../types';
import ACTIONS from '../actions';

const initialState: EmployeeStateType =  {
  employees: [{
    name: "Krishna Mohan Koyya",
    email: "krishna@glarimy.com",
    eid: 1234
  }, {
    name: "Vishnu Teja Koyya",
    email: "vishnu@glarimy.com",
    eid: 1235
  }, {
    name: "Amol Sriram Koyya",
    email: "sriram@glarimy.com",
    eid: 1236
  }]
}

function EmployeesPanel(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  const context: EmployeeContextType = {
    employees: state.employees,
    onAdd: (employee: EmployeeType):void => dispatch({
      type: ACTIONS.ADD_EMPLOYEE,
      employee: employee
    })
  }

  return (
    <EmployeeContext.Provider value={context}>
      <div>Employees</div>
      <EmployeeAddForm />
      <h1>This is List component</h1>
      <EmployeeList />
      <h2>This is end of component</h2>
    </EmployeeContext.Provider>
  );
}

export default EmployeesPanel;