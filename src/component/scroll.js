import React, { Component } from 'react';

const Scroll = (props) => {
    return (
        <div  style={{ overflowY:'scroll', border:'2px solid dark', height:'600px'}}>
            {props.children}
        </div>
        
      );
}
 
export default Scroll;