import React from 'react';


function Navbar() {
    return (
        <>
            <div className="navbar">
                <h1 style={{marginLeft:"3rem"}}>Food <br /> <span style={{ color: "#4E60FF" }}>delivery</span></h1>

                <input type="text" placeholder="search" />


                <li>Restaurants</li>
                <li>Deals</li>
                <li>My orders</li>
                <div className="box"><i class="fas fa-box"></i></div>
                <div className="logo"></div>
            </div>
        </>
    );
}

export default Navbar;