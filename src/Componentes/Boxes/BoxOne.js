import React, { Component } from 'react';
import MyButton from "../Utils/Boton";

class  BoxOne extends Component {
    state = {
        linkto:['','',''] 

    }
      render() {
        return (
            <div className="documento">
               <MyButton
               bck=""
                width= "100%"
                height="140px"
                link={this.state.linkto}
                />
            </div>

            
        );
    }
}

export default  BoxOne;