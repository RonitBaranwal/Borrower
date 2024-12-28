import React from "react";
import HomeHeader from './HomeHeader'
import Features from "./../Features";
import Footer from './../Footer'
import "./Home.css";
export default function Home(){
  return (
    <div>
      <HomeHeader />
      <Features />
      <Footer/>
    </div>
  );
}