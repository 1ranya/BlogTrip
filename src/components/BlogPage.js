import React, { Component } from 'react';
import rotterdam from "../media/rotterdam.png"
import rotterdamMaps from "../media/rotterdam-maps.png"
import PicturesSection from './PicturesSection'
class BlogPage extends Component {
    state= {
        click: false,
        click2: false,
        isActive: "isActive", 
        isHide: "is-hide",
        withmargin: "withmargin"
    }
    Collapse = (id)=>{
        const {click, click2} = this.state
        if(id === 1)
            this.setState({click: !click})
        else if(id === 2)
            this.setState({click2: !click2})
    }
    
    render(){
        return(
            <section class="hero is-fullheight greyBackground">
                <div class={ this.state.click ? "hero-body" : "" + this.state.withmargin }>
                    <div class="container">
                        <table class="table is-fullwidth">
                            <tr>
                                <th className="grey-opaque-background">
                                    <a onClick={ ()=>{this.Collapse(1)}}>
                                        <h1 class="title is-1 center zIndexed">Rotterdam <i class=" fas fa-angle-down iconReverse fa-flip-vertical" aria-hidden="true"></i></h1>
                                    </a>
                                </th>
                            </tr> 
                            <tr class={this.state.click ? " "+ this.state.isActive : this.state.isHide}>
                                <th>
                                    <div class="columns">
                                        <div class="column is-one-quarter ">
                                            {/* flag  */}
                                            <img src={rotterdam}></img>
                                            <br/>
                                            <br/>
                                            {/* data  */}
                                            <div>
                                                <p class="title is-6">Population:
                                                <small> 634 253 hab <span class="sub-text">(juillet 2017)</span></small> </p> 
                                                <p class="title is-6">Pays: <small>Pays-Bas</small></p>
                                                <p class="title is-6">Surface: <small>31 935 ha = 319,35 km2</small></p>
                                            </div>
                                        </div>
                                        <div class="column is-three-quarter left margin-5">
                                            <p>Rotterdam, est une commune néerlandaise, située dans la province de Hollande-Méridionale</p>
                                            <p>Rotterdam représente le cœur industriel du pays et elle est la deuxième ville des Pays-Bas en nombre d'habitants après Amsterdam.</p>
                                            <br/>
                                            <div class="columns">
                                                <div class="column is-three-quarter left">
                                                    <img id="rotterdamMap" src={rotterdamMaps}></img>
                                                </div>
                                                <div class="column is-three-quarter left">
                                                    <p><b>Nord:</b> Amsterdam</p>
                                                    <p><b>Est:</b> Utrecht</p>
                                                    <p><b>Sud:</b> Berg-op-zoom</p>
                                                    <p><b>Ouest:</b> La Haye</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr> 
                            <tr>
                                <th className="grey-opaque-background">
                                    <a onClick={()=>{this.Collapse(2)}}>
                                    <h1 class ="title is-1 center">
                                        Lieux à visiter <i class="fas fa-angle-down iconReverse fa-flip-vertical" aria-hidden="true"></i>
                                    </h1> 
                                    </a>
                                </th>
                            </tr>
                            <tr class={this.state.click2 ? ""+ this.state.isActive : this.state.isHide}>
                                <th>
                                    <PicturesSection/>
                                </th>
                            </tr>
                        </table>
                        <br/>
                    </div>
                </div>
            </section>
        )
    }
    
} 
export default BlogPage;