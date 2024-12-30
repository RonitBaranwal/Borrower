import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./AboutUs.module.css";
export default function AboutUsCompany() {
  const githubLink = () => {
    window.open("https://github.com/RonitBaranwal/Borrower", "_blank");
  }
  return (
    <Card className='styles.text-center'>
      <Card.Header>Borrower</Card.Header>
      <Card.Body>
        <Card.Title>
          Your Marketplace for Buying, Selling, and Renting with Freedom and
          Trust.
        </Card.Title>
        <Card.Text>
          Borrower is an innovative platform where individuals and businesses
          can buy, sell, and rent items seamlessly. It connects owners who want
          to monetize their possessions with those in need of products, offering
          a flexible and convenient marketplace. Whether it's a piece of
          equipment, a home appliance, or even a vehicle, Borrower ensures that
          owners can set their prices while users get fair access to the items
          they need.
        </Card.Text>
        <Button variant='primary'onClick={githubLink}>
          Github link
        </Button>
      </Card.Body>
      {/* <Card.Footer className='text-muted'>2 days ago</Card.Footer> */}
    </Card>
  );
}
