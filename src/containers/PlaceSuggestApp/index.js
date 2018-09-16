import React, { Component } from 'react';
import Search from '../../components/Search'

class PlaceSuggestApp extends Component {
    constructor(props) {
        super(props);
        this.placeholder = 'Search City';
       
      }

     
    render() {
        return(
            <div>  
                <Search 
                 placeholder={this.placeholder} />
            </div>
        )
    }
}

export default PlaceSuggestApp;