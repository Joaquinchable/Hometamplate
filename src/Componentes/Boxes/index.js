import React from 'react';
import "../../resources/styles.css";
import BoxOne from "./BoxOne";
import Boxtwo from "./BoxTwo" 
import Boxthree from "./BoxThree"

const Box = () => {
    return (
        <div className="box_container">

          <div className= "buenos_dias">
              <h6>Buenos dias Eduardo</h6>
              <h2>¿Que deseas hacer hoy?</h2>
          </div>

           <div className="inner_container_top">
                <BoxOne/>
           </div>

           <div className="inner_container_boxes">

            <Boxtwo/>

           </div>
           
           <div className="inner_container_masinfo">
             Mas informacion acerca de keydok
           </div>

           <div className="inner_container_info">
            <Boxthree/>
            </div>
            
        </div>
    );
};

export default Box;