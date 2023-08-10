import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EmployeePanel from './employees/EmployeePanel';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <EmployeePanel/>
  </React.StrictMode>
);
