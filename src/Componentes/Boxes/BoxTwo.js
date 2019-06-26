import React, { Component } from 'react';
import Zoom from "react-reveal";
import MyButton from "../Utils/Boton";
class  BoxTwo extends Component {
    state = {
        icons:['','',''],
        bck:['','',''],
        linkto:['','',''],
        delay:[250,500,1500]

    }

    showBoxes = () => (
        this.state.icons.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                
                    <div className="icon_wrapper">
                       
                        <div className="icon_title">
                        
                         <span>{this.state.icons[i]}</span>
                        
                        </div>
                        <MyButton
                                width= "128px"
                                height="120px"  
                                bck={this.state.bck[i]}
                                link={this.state.linkto[i]}
                            />
                    </div>
              
            </Zoom>
        ))
       
    )

    render() {
        return (
            
                <div className="boxes_wrapper">
                    {this.showBoxes()}
                </div>
                
        );
    }
}

export default  BoxTwo;