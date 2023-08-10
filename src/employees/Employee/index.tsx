import { EmployeeType } from "../types";

function Employee(e: EmployeeType) : JSX.Element{
  return (
    <div>
      <div>{e.name}</div>
      <div>{e.email}</div>
      <div>{e.eid}</div>
      <div>
        <div><button>Edit</button></div>
        <div><button>Remove</button></div>
        <div><button>View</button></div>
      </div>
    </div>
  );
}

export default Employee;