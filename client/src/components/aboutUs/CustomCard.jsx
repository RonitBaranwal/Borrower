import React from 'react'

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardLink from "react-bootstrap/CardLink";
import image from './../download.jpeg'
import styles from './AboutUs.module.css'
export default function CustomCard({name,age,description,linkedIn,github}) {
  return (
    <Card>
      <Card.Img variant='top' src={image} className={styles.devImages}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <CardLink href={linkedIn}>LinkedIn </CardLink>
      <CardLink href={github}>Github </CardLink>
     
    </Card>
  );
}
