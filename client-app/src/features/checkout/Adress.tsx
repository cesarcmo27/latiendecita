import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form, Grid, Segment, Label, Button } from "semantic-ui-react";

export const Adress = () => {
  const handleSubmit = () => {
    console.log("grabar");
  };

  return (
    <Segment clearing>
    <Grid>
      <Grid.Column width={12}>
       
          <Label color="teal" ribbon>
            Datos Direccion
          </Label>
          <br />
          <br />
          <FinalForm
            onSubmit={handleSubmit}
            render={() => (
              <Form>
                <h5>Distrito</h5>
                <Field name="Distrito"  placeholder="Distrito" component="select">
                  <option />
                  <option value="#ff0000">Jesus Maria</option>
                  <option value="#00ff00">Lince</option>
                  <option value="#0000ff">Pueblo Libre</option>
                </Field>
                <h5>Direccion</h5>
                <Field
                  name="Direccion"
                  placeholder="Direccion"
                  value=""
                  component="input"
                />
                <h5>Referencia</h5>
                <Field
                  name="Referencia"
                  placeholder="Referencia"
                  value=""
                  component="input"
                />
                <br />
                <br />
                <Button floated="right" type="button" content="Guardar" />
              </Form>
            )}
          />
       
      </Grid.Column>
    </Grid>
    </Segment>
  );
};
