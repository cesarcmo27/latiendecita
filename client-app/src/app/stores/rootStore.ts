import { configure } from "mobx";
import CategoriayStore from './categoriaStore';
import { createContext } from 'react';

configure({enforceActions: 'always'});

export class RootStore {
    categoriaStore: CategoriayStore;
    
    constructor() {
        this.categoriaStore = new CategoriayStore(this);
       
    }
}


export const RootStoreContext = createContext(new RootStore());