import React from 'react';
import Button from '@material-ui/core/Button';



const MyButton = (props) => {
    return (
        <Button
            href={props.link}
             style={{
                background: props.bck,
                color: props.color,
                width: props.width,
                height: props.height
               }}
        >
             </Button>
    );
};

export default MyButton;