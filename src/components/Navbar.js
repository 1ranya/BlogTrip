import React, { Component } from 'react';
import plane from "../media/plane.png"
import loveMessage from "../media/loveMessage.png"
import Download from "../media/Download.png"
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div class="hero-head bold">
                    <header class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src = {plane} alt="Logo" style={{width: 40, height: 40}}/>
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroC" class="navbar-menu">
                        <div class="navbar-end">
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link blue">
                                Pays
                                </a>

                                <div class="navbar-dropdown">
                                <Link to={'/'} class="navbar-item">
                                    Amsterdam
                                </Link>
                                <a class="navbar-item">
                                    Barcelone
                                </a>
                                <a class="navbar-item">
                                    Rotterdam
                                </a>
                                <hr class="navbar-divider"/>
                                <a class="navbar-item">
                                    Report an issue
                                </a>
                                </div>
                            </div>
                            <a class="navbar-item blue">
                            Images
                            </a>
                            <Link to={'/AddBlogForm'} class="navbar-item blue">Améliorez notre blog  <img src={loveMessage}></img>
                            </Link>
                            <span class="navbar-item">
                            <a class="button is-info is-light">
                                <img src={Download}>
                                </img>
                                <span> Download</span>
                            </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Navbar;