import {Header} from "../style.js";
import {ImgLogo} from "../style.js";
import React from "react";
import logo from '../logo-labenu.jpg';

export default function HeaderComponent() {
    return (
    <Header>
        <ImgLogo src = {logo}/>
        <h1>Whatslab</h1>
    </Header>
    )
 
}
