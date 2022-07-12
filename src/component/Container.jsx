import React from 'react';

function Container(props) {
    return (
        <div className='container'
            style={props.style}>
            <img src={props.img} className="kitchen" />

            <h5 >{props.name}</h5>
            <p>{props.children}</p>


        </div>
    );
}

export default Container;