import React from "react";
import { Card, Button,Image } from "semantic-ui-react";
import { IEmpleado } from "../../../app/models/empleado";


interface IProps {
    empleado:IEmpleado
} 

export const EmpleadoDetail:React.FC<IProps> = ({empleado}) => {
  return (
    <Card fluid> 
      <Card.Content>
        <Image floated="right"
          size="mini"
          src=""
        />
        <Card.Header>{empleado.nombre}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Editar
          </Button>
          <Button basic color="red">
            Cerrar
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
