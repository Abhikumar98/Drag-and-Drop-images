import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import image from './../images/image.jpg';


export const DisplayFiles = (props) => {
    return(
        <Card >
            <CardImg top width='30%' src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle style={{fontSize: '1em'}}>Name : {props.name}</CardTitle>
                <CardText>Size : {Math.round(props.size/1024)} KB</CardText>
            </CardBody>
        </Card>
    )
}