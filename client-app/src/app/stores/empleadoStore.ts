import { observable, computed, action,configure,runInAction } from "mobx";
import agent from "../api/agent";
import { createContext } from "react";
import { IEmpleado } from "./../models/empleado";
import { v4 as uuid } from "uuid";

configure({enforceActions:'always'});

class EmpleadoStore {
  @observable listaEmpleados = new Map();
  @observable empleado: IEmpleado | null = null;

  @computed get empleadoByName() {
    var query = Array.from(this.listaEmpleados.values()).sort(
      (a, b) => a.nombre - b.nombre
    );

    return query;
  }

  @action loadEmpleado = async () => {
    try {
      const empleados = await agent.Empleados.list();
      runInAction('loadEmpleado',()=>{
        empleados.forEach((empleado) => {
          empleado.fechaNaciemiento = empleado.fechaNaciemiento.split("T")[0];
  
          this.listaEmpleados.set(empleado.id, empleado);
        });
      })
    
    } catch (error) {
      console.log(error);
    }
  };

  @action getEmpleado = async (id:string)=>{
    
    let empleado= this.listaEmpleados.get(id);
    if (empleado)
    {
      this.empleado = empleado;
    }
    else{
      try{
        empleado= await agent.Empleados.details(id);
        runInAction('getEmpleado',()=>{
          this.empleado = empleado;
        })
      }
      catch(error){
        console.log(error);
      };
     
    }
  }

  @action limpiarEmpleado = ()=>{
    this.empleado = null;
  }

  @action saveForm = async (empleado: IEmpleado) => {
    try {
      if (empleado.id.length === 0) {
        empleado.id = uuid();
        await agent.Empleados.create(empleado);
        this.listaEmpleados.set(empleado.id, empleado);
      } else {
        await agent.Empleados.update(empleado);
        this.listaEmpleados.set(empleado.id, empleado);
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  @action deleteForm = async (id: string) => {
      try{
          await agent.Empleados.delete(id);
          this.listaEmpleados.delete(id);
      }
      catch (error) {
        console.log(error);
      }
  };
}

export default createContext(new EmpleadoStore());
