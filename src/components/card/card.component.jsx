import React from "react";
import "./card.styles.css";

export const Card = (props) =>{
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set6&size=180x180`} alt="Monster"/>
            <h2>{props.monster.name}</h2>
            <h3>{props.monster.email}</h3>
        </div>
    )
}