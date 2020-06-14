import React from "react";
import { Menu, Image, Label, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item header as={NavLink} to="/">
        <img src="logo192.png" alt="logo" style={{ marginRight: "10px" }} />
        Mi Tienda
      </Menu.Item>
      <Menu.Item >
        <Label >
          <Icon name="mail" />
          Mail
        </Label>
      </Menu.Item>
      <Menu.Item >
        <Label >
          <Icon name="phone square" />
          Telefono
        </Label>
      </Menu.Item>

      <Menu.Item position="right">
        <Image avatar spaced="right" src="/assets/images/user.png" as={Link} to="/login"/>
      </Menu.Item>
    </Menu>
  );
};
export default NavBar;
