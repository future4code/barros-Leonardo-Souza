import React from "react";
import { CardContainer } from "./style";

function Card (props) {

    const { switchPages } = props;
    console.log(switchPages);

    let url = props.url

     return (
     <CardContainer>
        <header>
            <button onClick={props.onClickReset}>Reset</button>
            <div className="title">
                <h4>Astro</h4>
                <h4>match</h4>
            </div>
            <button onClick={props.onClickChat}>Chat</button>
        </header>
        <main id="main" style={{backgroundImage: `linear-gradient(to bottom, rgba(252, 245, 245, 0), rgba(0, 0, 0, 0.705)), url(${url})`}}>
            <div>
                <div>
                    <h3>{props.name}</h3>
                    <h3>, {props.age}</h3>
                </div>
                <p>{props.bio}</p>
            </div>
        </main >

        <footer>
            <button onClick={props.onClickPass}>X</button>
            <button onClick={props.onClickLike}>♡</button>
        </footer>
    </CardContainer>
     )
    }
    export default Card
