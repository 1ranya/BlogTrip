import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'
import UploadFlag from './UploadFlag'
import UploadImage from './UploadImage'
class AddBlogForm extends Component {
    state={
        isActive: false,
        serviceIsActive: false
    }
    showBlock=()=>{

    }
    render() {
        return (
            <div class="hero-body greyBackground padding-body">
                <div class="container card padding-card">
                    <div class="container is-fullhd">
                        <div class="notification">
                            <strong>Pays</strong>
                        </div>
                    </div>
                <br></br>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Pays</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Nom du pays"/>
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-globe-americas"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                        {/* Download flag */}
                    <UploadFlag/>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Ajouter les coordonnées</label>
                        </div>
                        <div class="field-body">
                            <div class="field is-narrow">
                                <div class="control">
                                    <label class="radio">
                                    <input onClick={()=>{this.setState({isActive:true})}} type="radio" name="member"/>
                                    Yes
                                    </label>
                                    <label class="radio">
                                    <input onClick={()=>{this.setState({isActive:false})}} type="radio" name="member"/>
                                    No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={this.state.isActive ? " isActive" : "coordonnee"}>
                        <div class="field is-horizontal">
                            <div class="field-body">
                            <div class="field-label is-normal"/>
                                <div class="field-label is-normal">
                                    <label class="label">Population</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                            <input class="input" type="text" placeholder="Population"/>
                                            <span class="icon is-small is-left">
                                            <i class="fas fa-users"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal"/>
                            <div class="field-label is-normal">
                                <label class="label">Surface</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="Surface"/>
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-drafting-compass"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Déscription</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                            <div class="control">
                                <textarea class="textarea" placeholder="Déscription du pays pour mieux le découvrir..."></textarea>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="container is-fullhd">
                        <div class="notification">
                            <strong>Lieux à visiter</strong>
                        </div>
                    </div>
                    <br/>
                    <UploadImage/>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Nom</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Nom du lieu"/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Adresse</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Adresse du lieu"/>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-marked-alt"></i>                                    
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label">Ajouter des servicess</label>
                        </div>
                        <div class="field-body">
                            <div class="field is-narrow">
                                <div class="control">
                                    <label class="radio">                                        
                                    <input onClick={()=>{this.setState({serviceIsActive:true})}} type="radio" name="member"/>
                                    Yes
                                    </label>
                                    <label class="radio">
                                    <input onClick={()=>{this.setState({serviceIsActive:false})}} type="radio" name="member"/>
                                    No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div class={this.state.serviceIsActive ? " isActive" : "coordonnee"}>
                            <div class="field is-horizontal">
                                <div class="field-body">
                                <div class="field-label is-normal"/>
                                    <div class="field-label is-normal">
                                        <label class="label">Nom du service</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control is-expanded has-icons-left">
                                                <input class="input" type="text" placeholder="Services"/>
                                                <span class="icon is-small is-left">
                                                <i class="fas fa-users"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="field is-horizontal">
                        <div class="field-label">
                        </div>
                        <div class="field-body">
                            <div class="buttons">
                                <div class="control">
                                    <p class="control is-expanded has-icons-left">
                                        <button class="button is-primary ">
                                        Ajouter une image 
                                        </button>
                                    </p>
                                    <button class="button is-primary">
                                    Envoyer pour vérification
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddBlogForm;