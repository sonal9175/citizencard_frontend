import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent.jsx'

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
            <div class="container">
         <img src="citizen.jpg" className="image" alt="Citizen" ></img>
         <div class="top-left"><b>Welcome To Citizen Card Services</b></div>
            </div>
            </div>
        );
    }
}

export default HomeComponent;