import React, { Component } from 'react';

const Card = (props) =>{
    return(
        <div className="tc dib bg-light-green br3 pa3 ma2 grow shadow">
            <img alt='robots' src={`https://robohash.org/${props.name}`} width="250" height="250"/>
            <div>
                <h2 className="text-light">{props.name}</h2>
                <p className="text-light">{props.email}</p>
            </div>
        </div>

    );
}
 export default Card;