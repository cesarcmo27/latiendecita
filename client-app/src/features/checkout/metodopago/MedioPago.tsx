import React, { useState } from "react";
import { Segment, Grid, Label, Form, Radio } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";

import { PagoTarjeta } from "./PagoTarjeta";
import { PagoEfectivo } from "./PagoEfectivo";

export const MedioPago = () => {
  const [medioPago, setmedioPago] = useState("efectivo");
 

  const handleOnChange = (medio: string) => {
    console.log("inicio");
    console.log(medio);
    setmedioPago(medio);
  };

 

  const handleSubmit = () => {
    console.log("333");
  };
  return (
    <Segment clearing>
      <Label color="teal" ribbon>
        Medio de Pago
      </Label>

      <br />
      <br />
      <FinalForm
        onSubmit={handleSubmit}
        render={() => (
          <Form>
            <Grid>
              <Grid.Column width={5}>
                <Form.Field>
                  <Radio
                    label="efectivo"
                    name="radioGroup"
                    value="efectivo"
                    checked={medioPago === "efectivo"}
                    onChange={() => handleOnChange("efectivo")}
                  />

                  <Radio
                    label="tarjeta"
                    name="radioGroup"
                    value="tarjeta"
                    checked={medioPago === "tarjeta"}
                    onChange={() => handleOnChange("tarjeta")}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
            {medioPago === "efectivo" ? (
              
              <PagoEfectivo/>
            ) : (
              <Segment>
                <PagoTarjeta />
              </Segment>
            )}
          </Form>
        )}
      />
    </Segment>
  );
};
