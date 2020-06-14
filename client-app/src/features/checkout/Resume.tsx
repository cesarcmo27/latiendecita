import React from "react";
import { Segment, Label, Divider, Grid } from "semantic-ui-react";

export const Resume = () => {
  return (
    <Segment clearing>
      <Label color="blue" ribbon>
        Resumen del Pago
      </Label>
      <Divider />
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column textAlign='center'>Producto</Grid.Column>
          <Grid.Column textAlign='center'>cantidad</Grid.Column>
          <Grid.Column textAlign='center'>subtotal</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>nombre producto 1</Grid.Column>
          <Grid.Column textAlign='center'>4</Grid.Column>
          <Grid.Column textAlign='center'>56.7</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>nombre produto 2</Grid.Column>
          <Grid.Column textAlign='center'>6</Grid.Column>
          <Grid.Column textAlign='center'>4.56</Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider />

      <Grid columns={1} divided>
        <Grid.Row >
          <Grid.Column textAlign='right'><Label>subtotal : 56</Label></Grid.Column>
          <Grid.Column textAlign='right'> <Label>costo envio: 90</Label></Grid.Column>
          <Grid.Column textAlign='right'> <Label>total : 100</Label></Grid.Column>
        </Grid.Row>
        </Grid>
     
      
     
    </Segment>
  );
};
