import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import image from './../images/image.jpg';

export const DisplayUploads = (props) => {
    return(
        <Card onClick={(e) => e.stopPropagation()}>
            <CardImg top width='30%' src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.name.name}</CardTitle>                
                <Button outline onClick={() => props.removeFile(props.index)} color='danger'>Remove</Button>
            </CardBody>
        </Card>
    )
}