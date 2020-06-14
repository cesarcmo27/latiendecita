import React, { useContext } from "react";
import { IEmpleado } from "./../../../app/models/empleado";
import EmpleadoStore from "./../../../app/stores/empleadoStore";
import { observer } from "mobx-react-lite";
import { Segment, Button, Table, Label, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

interface IProps {
  listaEmpleado: IEmpleado[];
}

const EmpleadoList: React.FC<IProps> = ({ listaEmpleado }) => {
  const empleadoStore = useContext(EmpleadoStore);
  const { deleteForm } = empleadoStore;
  return (
    <Segment clearing>

<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nombre</Table.HeaderCell>
        <Table.HeaderCell>Apellido</Table.HeaderCell>
        <Table.HeaderCell>Cargo</Table.HeaderCell>
        <Table.HeaderCell>Esta Planilla</Table.HeaderCell>
        <Table.HeaderCell>Edad</Table.HeaderCell>
        <Table.HeaderCell>...</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {listaEmpleado &&
          listaEmpleado.map((empleado) => (
            <Table.Row key={empleado.id}>
            <Table.Cell>
              <Label ribbon>{empleado.nombre}</Label>
            </Table.Cell>
            <Table.Cell>{empleado.apellido}</Table.Cell>
            <Table.Cell>{empleado.cargo}</Table.Cell>
            <Table.Cell>{empleado.esPlanilla? 'SI':'NO'}</Table.Cell>
            <Table.Cell>{empleado.edad}</Table.Cell>
            <Table.Cell>
            <Button
                    floated="right"
                    content="Ver"
                    color="blue"
                    as={Link}
                    to={`/empleados/${empleado.id}`}
                  />
                  <Button
                    floated="right"
                    content="Eliminar"
                    color="red"
                    onClick={() => deleteForm(empleado.id)}
                  />
            </Table.Cell>
          </Table.Row>
          ))
}
    
    
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='6'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

   
    </Segment>
  );
};

export default observer(EmpleadoList);
