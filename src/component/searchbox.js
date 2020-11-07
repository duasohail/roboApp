import React, { Component } from 'react';

const Searchbox = ({searchfield,searchChange}) => {
    return (  
        <div className="tc pb-2">
            <input className="ba b--green pa2 bg-lightest-blue" type="text" placeholder="Search Robots" onChange={searchChange} />
        </div>
    );
}
 
export default Searchbox;