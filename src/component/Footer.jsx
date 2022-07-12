import React from 'react';

function Footer(props) {
    return (
        <div className='footer'
            style={props.style}>
                <img src={props.img} className="portret" />

                <h2>{props.name}</h2>

            </div>
    );
}

export default Footer;