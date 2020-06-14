import React from "react";
import { Segment, Container, Grid } from "semantic-ui-react";
import { Adress } from "./Adress";
import { MedioPago } from "./metodopago/MedioPago";
import { Resume } from "./Resume";
import MultiStep from "react-multistep";
import { Observaciones } from "./Observaciones";
import { FechaEntrega } from "./fechadelivery/FechaEntrega";

export const checkout = () => {
  const steps = [
    { name: "Direccion", component: <Adress /> },
    { name: "Metodo de Pago ", component: <MedioPago /> },
    { name: "Fecha de Entrega", component: <FechaEntrega /> },
  ];

  return (
    <Container style={{ marginTop: "6em", marginLeft: "12em" }}>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={10}>
            <Segment>
              <MultiStep steps={steps} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
            <Resume />
            </Segment>
           
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>
    </Container>
  );
};
