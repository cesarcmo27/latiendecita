import { observable, action, runInAction } from "mobx";
import agent from "../api/agent";
import { RootStore } from "./rootStore";

export default class CategoriayStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
      this.rootStore = rootStore;
    }
      
    @observable listaCategoria = new Map();


    @action loadcategoria = async () => {
        try{
            const categorias = await agent.Categorias.list();
            runInAction('loadCategoria',()=>{
                categorias.forEach((categoria) => {
                   this.listaCategoria.set(categoria.id, categoria);
                });
              })
        }
        catch(error)
        {
            console.log(error);
        }

        
    }
}