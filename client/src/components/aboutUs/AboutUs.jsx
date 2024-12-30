import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Header from "./../Header&Footer/Header";
import Footer from "../Header&Footer/Footer";
import CustomCard from "./CustomCard";
import styles from "./AboutUs.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import AboutUsCompany from "./AboutUsCompany";
import peopleData from "./people";
export default function AboutUs() {
  return (
    <>
      <div className={styles.aboutusBody}>
        <span className={styles.aboutusBorrower}>
          <Link to='/' className={styles.linkBorrower}>
            Borrower
          </Link>
        </span>
        <div className={styles.aboutusTitle}>About Us</div>
        <AboutUsCompany />
        <div id='styles.aboutDevs'>
          <CardGroup>
            <CustomCard {...peopleData[0]} />
            <CustomCard {...peopleData[1]} />
            <CustomCard {...peopleData[2]} />
          </CardGroup>
        </div>
      </div>
    </>
  );
}
