import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import './styles.css';

class SearchInput extends Component {
    constructor(props) {
        super(props);
    
        // Declare State
        this.state = {
          city: '',
          query: ''
        };
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
      }


    handleScriptLoad = () => { 
        // Declare Options For Autocomplete 
        var options = { types: ['(cities)'] }; 
        
        // Initialize Google Autocomplete 
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
                              document.getElementById('autocomplete'),
                              options ); 
        // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed',
                                      this.handlePlaceSelect); 
      }

      handlePlaceSelect = () => {

        // Extract City From Address Object
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;
    console.log(addressObject)
    console.log(address)
        // Check if address is valid
        if (address) {
          // Set State
          this.setState(
            {
              city: address[0].long_name,
              query: addressObject.formatted_address,
            }
          );
        }
      }
      
    render() {
        return (
            <div>
               
                 <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOY0eKCotW0BF-DuaWzc9M34G-nj8NrNo
&libraries=places"          
                 onLoad={this.handleScriptLoad}        
            />  
            
        <SearchBar id="autocomplete"
         placeholder="Search City"  
         value={this.state.query}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
            </div>
        );
    }


}
export default SearchInput;