import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Container, Header,Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';

export const HomePage = () => {
    return (
     <Segment inverted textAlign='center' vertical className='masthead'>
         <Container text>
            <Header as='h1' inverted>
                <Image
                size='massive'
                src="/assets/images/bodega2.png"
                alt="logo"
                style={{ marginButton: "12" }}
                />
                 La Bodega Del Barrio
            </Header>
            <Header as='h2' inverted content ='BIENVENIDO CASERO' />
            <Button as ={Link} to={'/tienda'} size='huge' inverted>
                Pase a comprar....
            </Button >
         </Container>
     </Segment>
    )
}
