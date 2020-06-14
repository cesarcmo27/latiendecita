import React from "react";
import { Field } from "react-final-form";
import { Segment, Grid } from "semantic-ui-react";

export const PagoEfectivo = () => {
  return (
    <Segment>
      <h1>Efectivo</h1>
      <Grid>
        <Grid.Column width={8}> 
        <h5>DNI</h5>
          <Field
            name="dni"
            placeholder="DNI en caso de boleta electronica"
            value=""
            type="number"
            component="input"
          />
          <h5>Monto de Pago</h5>
          <Field
            name="montopago"
            placeholder="Monto a pagar"
            value="0"
            type="number"
            component="input"
          />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
