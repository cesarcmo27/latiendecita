import React, { useState } from "react";
import { Segment, Label, Dropdown } from "semantic-ui-react";
import DatePicker from "react-datepicker";

export const FechaEntrega = () => {
  const [fecha, setfecha] = useState(new Date());
  const options = [
    { key: 1, text: '09:00 - 10:00 am', value: 1 },
    { key: 2, text: '02:00 - 03:00 pm', value: 2 },
    { key: 3, text: '05:00 - 06:00 pm', value: 3 },
  ]

  const handleChangeDate = (fecha: Date) => {
    setfecha(fecha);
  };
  return (
    <Segment>
      <Label color="teal" ribbon>
        Fecha de Entrega
      </Label>
      <h5>Fecha</h5>
      <DatePicker selected={fecha} onChange={handleChangeDate} />
      <h5>Horario</h5>
      <Dropdown
            
            options={options}
            placeholder='Seleccione horario de entrega'
            selection
            
          />
    </Segment>
  );
};
