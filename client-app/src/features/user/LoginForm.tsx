import React from "react";
import {
  Grid,
  Header,
  Image,
  Form,
  Segment,
  Button,
  Message,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="logo192.png" /> Iniciar Sesion
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large" as={Link} to= '/tienda'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
        
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="google plus" icon="google" />
        </Message>
      </Grid.Column>
    </Grid>
  );
};
