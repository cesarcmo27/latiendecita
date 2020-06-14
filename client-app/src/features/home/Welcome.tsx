import React from 'react'
import { Segment,Image } from 'semantic-ui-react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const Welcome = () => {
    const slider = (
        <AwesomeSlider animation="foldOutAnimation">
          <div><Image src='/assets/Tienda/banner.webp'/></div>
          <div><Image src='/assets/Tienda/banner2.jpg'/></div>
          <div><Image src='/assets/Tienda/articulo.jpg'/></div>
         
        </AwesomeSlider>
      );
    return (
        <Segment clearing>
           
            {slider}
        </Segment>
            
      
    )
}
