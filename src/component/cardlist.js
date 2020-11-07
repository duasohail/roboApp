import React, { Component, createFactory } from 'react';
import Card from './card';

const CardList = ({robots}) => {
    const cardComponent =robots.map((user,i)=>{
        return < Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>

    })
    return (  
        <div className="row justify-content-center align-items-center">
             {cardComponent}
        </div>

    );
}
 
export default CardList;