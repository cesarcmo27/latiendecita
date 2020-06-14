import React, { useEffect, useContext } from "react";
import { Grid, Segment, Header, Icon, Button } from "semantic-ui-react";
import EmpleadoList from "./EmpleadoList";

import EmpleadoStore from "./../../../app/stores/empleadoStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const EmpleadoDashboard = () => {
  const empleadoStore = useContext(EmpleadoStore);

  useEffect(() => {
    empleadoStore.loadEmpleado();
  }, [empleadoStore]);

  return (
    <div >
      <Segment clearing>
      <Header as="h3" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Empleados</Header.Content>
        
      </Header>
      <Grid container
    spacing={0}
    align="center"
    justify="center"
    
    direction="column"
    style={{ backgroundColor: 'teal' }}>
        <Grid.Row>
          <Grid.Column width={5}>
          <Button
          positive
          floated="left"
          content="Crear Empleado"
          as={Link} to ={'/crearEmpleado'}
        />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={15}>
          {empleadoStore.empleadoByName && (
            <EmpleadoList listaEmpleado={empleadoStore.empleadoByName} />
          )}
        </Grid.Column>
        </Grid.Row>
        
       
      </Grid>
    </Segment>
  </div> 
  
  );
};

export default observer(EmpleadoDashboard);
