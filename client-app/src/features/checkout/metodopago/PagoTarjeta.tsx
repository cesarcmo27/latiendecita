import React, { useState, FormEvent, useEffect } from "react";
import Cards from "react-credit-cards";
import { Segment, Grid } from "semantic-ui-react";


interface ICard {
  cvc: string;
  expiry: string;
  focus: any;
  name: string;
  number: string;
}

export const PagoTarjeta = () => {
 

  const [state, setstate] = useState<ICard>({
    cvc: "",
    expiry: "",
    focus: "number",
    name: "",
    number: "",
  });

  const handleInputFocus = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.name);
    setstate({ ...state, focus: e.currentTarget.name });
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    console.log(e.currentTarget);
    setstate({ ...state, [name]: value });
  };

  return (
    <Segment>

<Grid>
        <Grid.Column width={10}>
        <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />

         
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
          <input
        type="text"
        name="number"
        placeholder="Card Number"
        onChange={(e) => handleInputChange(e)}
        onFocus={(e) => handleInputFocus(e)}
      />
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={(e) => handleInputChange(e)}
        onFocus={(e) => handleInputFocus(e)}
      />
      <input
        type="text"
        name="cvc"
        placeholder="CVC"
        onChange={(e) => handleInputChange(e)}
        onFocus={(e) => handleInputFocus(e)}
      />
      <input
        type="text"
        name="expiry"
        placeholder="Fecha Vencimiento"
        onChange={(e) => handleInputChange(e)}
        onFocus={(e) => handleInputFocus(e)}
      />
          </Segment>
        </Grid.Column>
      </Grid>
      

     
      <br />

      
    </Segment>
  );
};
