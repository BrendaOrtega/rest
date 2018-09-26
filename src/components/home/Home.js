import React, { Component } from 'react';
import './Home.css';
import video from '../../assets/comida.mp4';
import logo from '../../assets/log_gris.png';
import Contador from './Contador';
import Galeria from './Galeria';
import Footer from './Footer';
import Comments from './Comments';

class Home extends Component {

    render() {
        return (
            <div>
                <div className="uk-position-relative">

                    <div className="uk-position-top"><div className="">
                            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                                <div class="uk-navbar-left fl">
                                    <a href="#"><img src={logo} alt=""/></a>

                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <a href="#">Nosotros</a>
                                        </li>
                                        <li><a href="#">Menú</a></li>
                                        <li><a href="#">Reservaciones</a></li>
                                        <li><a href="#">Prensa</a></li>
                                        <li><a href="#">Contacto</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="flex">
                                <Contador />
                            </div>
                        </div>
                    </div>
                    <video id='bg-video' src={video} autoPlay="autoplay" loop  ></video>
                </div>
                <Galeria />
                <Comments/>
                <Footer />
            </div>
        );
    }
}

export default Home;