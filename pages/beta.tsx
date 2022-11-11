/**----------------------------------------------------------------------------------
 * Mirage Information Page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

 import React, { useEffect } from "react";
 import { NextPage } from "next";
 
 import styles from "./about.module.css"
 import Link from "next/link";
 
 const TestFlight: NextPage = () => {
  useEffect(() => {
    window.location.assign("https://testflight.apple.com/join/SodgdzA0");
  });
  return <></>;
}

export default TestFlight;
