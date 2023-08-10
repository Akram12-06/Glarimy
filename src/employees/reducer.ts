import { EmployeeStateType, EmployeeActionType } from "./types";
import ACTIONS from './actions';

const reducer = (state: EmployeeStateType, action: EmployeeActionType): EmployeeStateType => {
    switch(action.type){
        case ACTIONS.ADD_EMPLOYEE: 
            return {
                employees: [...state.employees, action.employee]
            }
        default:
            return state
    }
}

export default reducer;