import React from "react";
import {
  Button,
  Icon,
  Label,
  Image,
  Modal,
  Card,
  Input,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export const Compras = () => {
  const carrito = (
    <div>
      {" "}
      <Button color="facebook" animated="fade" size="small">
        <Button.Content hidden>Lista</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
      <Label color="blue" floating size="small">
        3
      </Label>
    </div>
  );

  return (
    <Modal size="tiny" trigger={carrito} closeIcon>
      <Modal.Header> TU CARRITO (3)</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
          <Card.Group >
            <Card key={1}>
              <Card.Content>
                <Image
                  floated="right"
                  size="tiny"
                  src="/assets/Tienda/articulo.jpg"
                />
                <Card.Header>Nombre Producto 1</Card.Header>
                <Card.Meta>Precio Unit: 8.67 </Card.Meta>
                <Card.Description>
                  SubTotal : 
                  <strong>17.89</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign='center'>
              <Button icon>
                    <Icon size='large' name='trash'/> 
                </Button>
                
                <Button circular icon="minus" />
                <Input value="2" style={{ width: "50px" }} />
                <Button circular icon="plus" />
              </Card.Content>
            </Card>
           
          </Card.Group>
          <Card.Group >
            <Card key={2}>
              <Card.Content>
                <Image
                  floated="right"
                  size="tiny"
                  src="/assets/Tienda/articulo.jpg"
                />
                <Card.Header>Nombre Producto 2</Card.Header>
                <Card.Meta>Precio Unit: 8.67 </Card.Meta>
                <Card.Description>
                  SubTotal : 
                  <strong>17.89</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign='center'>
              <Button icon>
                    <Icon size='large' name='trash'/> 
                </Button>
                
                <Button circular icon="minus" />
                <Input value="2" style={{ width: "50px" }} />
                <Button circular icon="plus" />
              </Card.Content>
            </Card>
           
          </Card.Group>
          <Card.Group >
            <Card key={3}>
              <Card.Content>
                <Image
                  floated="right"
                  size="tiny"
                  src="/assets/Tienda/articulo.jpg"
                />
                <Card.Header>Nombre Producto 3</Card.Header>
                <Card.Meta>Precio Unit: 8.67 </Card.Meta>
                <Card.Description>
                  SubTotal : 
                  <strong>17.89</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign='center'>
              <Button icon>
                    <Icon size='large' name='trash'/> 
                </Button>
                
                <Button circular icon="minus" />
                <Input value="2" style={{ width: "50px" }} />
                <Button circular icon="plus" />
              </Card.Content>
            </Card>
           
          </Card.Group>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary as={Link} to="/checkout">
          Total: 59.98 <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
