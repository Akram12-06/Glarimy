import { createContext} from "react";
import { EmployeeContextType } from "./types";

export const EmployeeContext = createContext<EmployeeContextType|null>(null);