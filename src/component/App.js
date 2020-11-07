import React, { Component } from 'react';
import Searchbox from './searchbox';
import Cardlist from './cardlist';
import {robots} from './4.2 robots.js';
import Scroll from './scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:robots,
            searchfield : ''
        }
    }

    onSearchChange = (event)=>{

        this.setState({ searchfield: event.target.value});
        
       
        // console.log(filteredrobots);

    }

    

    render() {
        
        const filteredrobots= this.state.robots.filter(robots =>{

            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

        })

        return ( 
            <div>
                <Searchbox  searchChange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filteredrobots}/>
                </Scroll>
                
            </div>
         );
    }
}
 
export default App;