export interface EmployeeType {
    name: string,
    email: string,
    eid: number
}

export interface EmployeeActionType {
    type: string,
    employee: EmployeeType
}

export interface EmployeeStateType {
    employees: EmployeeType[]
}

export interface EmployeeContextType {
    employees: EmployeeType[],
    onAdd: (e:EmployeeType) => void
}