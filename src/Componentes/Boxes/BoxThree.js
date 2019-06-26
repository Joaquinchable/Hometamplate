import React, { Component } from 'react';
import Zoom from "react-reveal";

class BoxThree extends Component {

    state = {
        info:['','',''],
      
        
       
        delay:[500,0,1500]

    }

    showBoxes = () => (
        this.state.info.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                
                    <div className="info_wrapper">
                         
                         <span>{this.state.info[i]}</span>

                    </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div>

                <div className="boxes_info">
                    {this.showBoxes()}
                </div>

            <div className="copy_container">
             <div className="copy">©Copyright 2019 Keydok S.A. de C.V</div> 
             <div clasName="logo"></div>
            </div>
            </div>
        );
    }
}


export default BoxThree;