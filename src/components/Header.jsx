import React from "react";
import { useNavigate } from "react-router-dom";
import GitHub from "../images/github-beige.png";
import { useEffect } from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarPC from "./NavbarPC";
import { useState } from "react";
let width;

export default function Header() {

  const [device, setDevice] = useState("");
  useEffect(() => {
    width = window.innerWidth;
    if(width<1000) {
      setDevice("mobile")
    }else{
      setDevice("pc")
    }
    console.log(width);
  }, []);

  if(device === "mobile"){
    return <NavbarMobile/>
  }else{
    return <NavbarPC/>

  }
}
