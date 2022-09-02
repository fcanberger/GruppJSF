import { createContext } from "react";
import { IAdminRes } from "../models/IAdminRes";

export interface IAdminReservetion {
  reservation: IAdminRes[];
  handleEditInputChange(id: number): void;
}

export const defaultValue: IAdminReservetion = {
  reservation: [],
  handleEditInputChange: (id: number) => {},
};

export const AdminResContext = createContext(defaultValue);
