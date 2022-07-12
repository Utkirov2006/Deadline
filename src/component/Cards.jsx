import React from 'react';

function Cards(props) {
    return (
        <div className="card"
            style={props.style}>

            <img src={props.img} className="avatar" />

            <div className="wrapper">

                <h3>{props.name}</h3>
                <p style={{ fontSize: "50px", color: " #4E60FF" }}>{props.value}</p>
                <p style={{ fontSize: "50px", color: " #000" }}>{props.values}</p>

                <p>{props.children}</p>

            </div>
        </div>
    );
}

export default Cards;