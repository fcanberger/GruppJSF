import { createContext } from "react";
import { IAdminRes } from "../models/IAdminRes";

export interface IAdminReservetion {
  reservation: IAdminRes[];
  handleEditInputChange(id: string): void;
}

export const defaultValue: IAdminReservetion = {
  reservation: [],
  handleEditInputChange: (id: string) => {},
};

export const AdminResContext = createContext(defaultValue);
