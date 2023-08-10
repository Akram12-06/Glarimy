import { useState, useEffect, useContext, FormEvent } from 'react';
import { EmployeeContext } from '../context';
import { EmployeeContextType } from '../types';

function EmployeeAddForm(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [eid, setEid] = useState<number>(0);
  const ctx: EmployeeContextType = useContext(EmployeeContext) as EmployeeContextType;

  const onEidChange = (e: FormEvent<HTMLInputElement>) => setEid(e.currentTarget.value ? parseInt(e.currentTarget.value) : 0);
  const onEmailChange = (e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
  const onNameChange = (e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value);
  const onAdd = (e: FormEvent<HTMLButtonElement>) => ctx.onAdd({ name, email, eid });

  useEffect(() => {
    setName("");
    setEmail("");
    setEid(0);
  }, [ctx.employees]);

  return (
    <div>
      <div>Add New Employee</div>
      <div><input value={eid} placeholder="Employee ID" onChange={onEidChange} /><input value={name} placeholder="Name" onChange={onNameChange} /><input value={email} placeholder="email" onChange={onEmailChange} /><button onClick={onAdd}>Add</button></div>
    </div>
  );
}

export default EmployeeAddForm;