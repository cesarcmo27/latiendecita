import React, { useState, useContext, FormEvent, useEffect } from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";
import { IEmpleado } from "./../../../app/models/empleado";
import EmpleadoStore from "./../../../app/stores/empleadoStore";
import { RouteComponentProps, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
interface FormParams {
  id: string;
}

const EmpleadoForm: React.FC<RouteComponentProps<FormParams>> = ({ match,history }) => {

  const empleadoStore = useContext(EmpleadoStore);
  const {
    saveForm,
    empleado: empleadoParametro,
    getEmpleado,
    limpiarEmpleado
  } = empleadoStore;

  useEffect(() => {
    if (match.params.id) {
     
      getEmpleado(match.params.id).then(() => {
        empleadoParametro && setEmpleado(empleadoParametro);
      });
    }
    return ()=>{
      limpiarEmpleado();
    }
  },[getEmpleado,limpiarEmpleado,match.params.id,empleadoParametro]);

  const [empleado, setEmpleado] = useState<IEmpleado>({
    id: "",
    nombre: "",
    apellido: "",
    cargo: "",
    codigoId: "",
    fechaNaciemiento: "",
    esPlanilla: false,
    edad: 0,
  });

  const handleImputChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
   
    if (name === "edad") {
      setEmpleado({ ...empleado, [name]: Number(value) });
    } else {
      setEmpleado({ ...empleado, [name]: value });
    }
  };

  const handleSubmit = () => {
    console.log("grabando");
    //console.log(empleado);
    saveForm(empleado).then(()=>{
      history.push('/empleados');
    });
  };

  return (
    <Grid>
      <Grid.Column width={10}>
      <Segment clearing>
      <Form>
        <Form.Input
          onChange={handleImputChange}
          name="nombre"
          placeholder="Nombre"
          value={empleado.nombre}
        />
        <Form.Input
          onChange={handleImputChange}
          name="apellido"
          placeholder="Apellido"
          value={empleado.apellido}
        />
        <Form.Input
          onChange={handleImputChange}
          name="cargo"
          placeholder="Cargo"
          value={empleado.cargo}
        />
        <Form.Input
          onChange={handleImputChange}
          name="fechaNaciemiento"
          type="date"
          placeholder="Fecha Naciemiento"
          value={empleado.fechaNaciemiento}
        />
        <Form.Checkbox
          onChange={handleImputChange}
          name="esPlanilla"
          label="Esta en Planilla"
          checked={empleado.esPlanilla}
        />
        <Form.Input
          onChange={handleImputChange}
          name="edad"
          type="number"
          placeholder="Edad"
          value={empleado.edad}
        />
        <Button
          floated="right"
          positive
          type="submit"
          content="Grabar"
          onClick={handleSubmit}
        />
        <Button
          floated="right"
          type="button"
          content="Cerrar"
          as = {Link} to ={'/empleados'}
        />
      </Form>
    </Segment>
      </Grid.Column>
    </Grid>
    
  );
};

export default observer(EmpleadoForm);
