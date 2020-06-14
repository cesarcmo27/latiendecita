import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const NavBarLeft = () => {
  return (
    <Menu inverted vertical style={{ padding: 4, marginTop: "6em" }}>
      <Menu.Item>
        <Menu.Header>Ofertas</Menu.Header>

        <Menu.Menu>
          <Menu.Item
            name="Menos de 10 soles"
            as={Link}
            to="/tienda/productos"
          />
          <Menu.Item name="2 x 1" as={Link} to="/tienda/productos" />
          <Menu.Item name="Canje" as={Link} to="/tienda/productos" />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Abarrotes</Menu.Header>

        <Menu.Menu>
          <Menu.Item name="Aceite" as={Link} to="/tienda/productos" />
          <Menu.Item name="Arroz" as={Link} to="/tienda/productos" />
          <Menu.Item name="Menestra" as={Link} to="/tienda/productos" />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Bebidas Cervezas y Licores</Menu.Header>

        <Menu.Menu>
          <Menu.Item name="Agua" as={Link} to="/tienda/productos" />
          <Menu.Item name="Jugos" as={Link} to="/tienda/productos" />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Soporte</Menu.Header>

        <Menu.Menu>
          <Menu.Item name="email">E-mail Support</Menu.Item>

          <Menu.Item name="faq">FAQs</Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
};
