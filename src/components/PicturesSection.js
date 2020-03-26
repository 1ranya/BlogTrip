import React, { Component } from 'react';
import cubeHouse from '../media/cubeHouse.jfif'
import wifi from '../media/wifi.png'
import coffee from '../media/coffee.png'
import restaurant from '../media/restaurant.png'
import wheelchair from '../media/wheelchair.png'
import tallChair from '../media/tallChair.png'
class PicturesSection extends Component {
    state= {
        click: false,
        isActive: "is-active", 
        isHide: "is-hide", 
    }
    componentDidMount(){
        console.log(this.props.name)
        console.log(this.props.Collapse)
    }
    render() {
        return (
            
                    <div class="columns ">
                        <div class="column is-half ">
                            <img src={cubeHouse}></img>
                        </div>
                        <div class="column">
                            <a class="has-tooltip-top has-tooltip-info" data-tooltip="Visiter le site" href="https://www.stayokay.com/en/hostel/rotterdam?gclid=Cj0KCQiA2b7uBRDsARIsAEE9XpHXnObmvmS27iOz8vz7K6msOQY0Hr85E8tie4qaV5WVNb0fPlHnQqsaAl1sEALw_wcB">
                                <h1 class="title is-5 blue">Stayokey Hostel</h1> 
                            </a>
                            <br/>
                            <p><b>Adresse:</b> <small>Overblaak 85-87, 3011 MH Rotterdam, Pays-Bas</small></p>
                            <p><b>Services:</b> 
                            <li>Wifi gratuit <img src={wifi} style={{width:15, height:15}}></img></li>
                            <li>Petit déjeuner <img src={coffee} style={{width:15, height:15}}></img></li>
                            <li> Bar et restaurant <img src={restaurant} style={{width:15, height:15}}></img></li>
                            <li> Accès handicapés <img src={wheelchair} style={{width:15, height:15}}></img> </li>
                            <li>  Adapté aux enfants <img src={tallChair} style={{width:15, height:15}}></img></li>
                            </p>
                            <p><b>Informations:</b> <small>Stayokey se situe face à la gare de Rotterdam-Blaak</small></p>
                        </div>
                    </div>
        );
    }
}

export default PicturesSection