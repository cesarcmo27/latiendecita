import React, { Fragment } from "react";

import NavBar from "../../features/nav/NavBar";
import { Container, Grid } from "semantic-ui-react";

import { Route } from "react-router-dom";
import { HomePage } from "./../../features/home/HomePage";

import { NavSearch } from "../../features/nav/NavSearch";
import { NavBarLeft } from "../../features/nav/NavBarLeft";
import { Welcome } from "./../../features/home/Welcome";
import { ProductoList } from "../../features/productos/Dashboard/ProductoList";
import { LoginForm } from "./../../features/user/LoginForm";
import { checkout } from "./../../features/checkout/checkout";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />

            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/checkout" component={checkout} />
            <Route
              path={"/tienda"}
              render={() => (
                <Fragment>
                  <NavSearch />
                  <Grid>
                    <Grid.Column width={3}>
                      <NavBarLeft />
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Container style={{ marginTop: "6em" }}>
                        <Route
                          exact
                          path="/tienda/welcome"
                          component={Welcome}
                        />

                        <Route
                          exact
                          path="/tienda/productos"
                          component={ProductoList}
                        />
                      </Container>
                    </Grid.Column>
                  </Grid>
                </Fragment>
              )}
            />
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default App;
