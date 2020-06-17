import { ISubcategoria } from "./subcategoria";

export interface ICategoria{
    id:string,
    nombre:string
    subcategoria:ISubcategoria[]
}