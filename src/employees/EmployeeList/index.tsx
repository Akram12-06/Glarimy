import { useState, useEffect, useContext } from 'react';
import { EmployeeContext } from '../context';
import Employee from "../Employee";
import { EmployeeContextType, EmployeeType } from '../types';

function EmployeesList(): JSX.Element {
  const ctx:EmployeeContextType = useContext(EmployeeContext) as EmployeeContextType;

  const [results, setResults] = useState<EmployeeType[]|undefined>(undefined);
  const [key, setKey] = useState<string|undefined>(undefined);

  useEffect(() => setResults(key ? ctx.employees.filter((e:EmployeeType) => e.name.toUpperCase().includes(key.toUpperCase())) : undefined), [ctx.employees, key]);

  return (
    <div>
      <div>Employee Directory</div>
      <div><input value={key} placeholder="search by id" onChange={e=>setKey(e.target.value)} /></div>
      {(results || ctx.employees).map((e:EmployeeType) =><Employee key={e.eid} name={e.name} email={e.email} eid={e.eid}/>)}
    </div>
  );
}

export default EmployeesList;