import React from 'react';

const Pion = ({x, y, color}) => {
    return (
        <div className="pion" style={{
            position: 'absolute',
            top: y,
            left: x,
            backgroundColor: color
        }}></div>
    );
}

export default Pion;