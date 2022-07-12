import { useState } from "react"
import Cards from './component/Cards';
import Footer from "./component/Footer";
import Navbar from './component/Navbar';

import rasm from './images/img1.png'
import rasm1 from './images/img2.png'
import Container from "./component/Container";


import portret1 from './images/pizza.png'
import portret2 from './images/burger.png'
import portret3 from './images/meat.png'
import portret4 from './images/sushi.png'
import portret5 from './images/broccoli.png'
import portret6 from './images/cake.png'


import kitchen from './images/uy.png'
import kitchen2 from './images/uy2.png'
import kitchen3 from './images/uy3.png'


import res from './images/res.png'
import res2 from './images/res2.png'
import res3 from './images/res3.png'


function App() {
  return (
    <div>

      <Navbar />

      <Cards name="All deserts" value="20% OFF" img={rasm1} style={{ background: "#F3F4FF" }}>
        <i>Deserty</i>
      </Cards>


      <Cards name="Big Burgers" values="50% OFF" img={rasm} style={{ background: "#FFF3ED", boxshadow: "10px" }}>
        <i>Fooddies</i>
      </Cards>





      <Footer name="Pizza" img={portret1}></Footer >

      <Footer name="Burger" img={portret2} style={{ color: "#4E60FF", border: "2px solid #4E60FF", background: "#F3F4FF" }}></Footer >

      <Footer name="BBQ" img={portret3}></Footer >

      <Footer name="Sushi" img={portret4} style={{ color: "#4E60FF", border: "2px solid #4E60FF", background: "#F3F4FF" }}></Footer >

      <Footer name="Vegan" img={portret5}></Footer >

      <Footer name="Desserts" img={portret6}></Footer >





      <Container name="Royal Sushi House" img={kitchen}>
        <g><i class="fas fa-clock"></i> 30-40 min <span>$32 min sum</span></g> <br />
        <button><i class="fas fa-hotdog"></i> Hot dog</button>
      </Container >


      <Container name="Burgers & Pizza" img={kitchen2}>
        <g><i class="fas fa-clock"></i> 40-60 min <span>$24 min sum</span></g><br />
        <button><i class="fas fa-pizza-slice"></i>Pizza</button>
      </Container >


      <Container name="Ninja sushi" img={kitchen3}>
        <g><i class="fas fa-clock"></i> 20-40 min <span>$40 min sum</span></g><br />
        <button><i class="fas fa-hamburger"></i> Burger</button>
      </Container >


      <div className="urn">

        <Container img={res}></Container>
        <Container img={res2}></Container>
        <Container img={res3}></Container>
      </div>


    </div>
  );
}

export default App;