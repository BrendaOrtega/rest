import React, { Component } from 'react';
import './Home.css';
import frase from '../../assets/frase.png';

class Home extends Component {

    render() {
        return (
            <div className="slide uk-visible-toggle uk-light" uk-slideshow="animation: pull">
                <ul className="uk-slideshow-items">
                    <li>
                        <img src={frase} alt=""/>
                    </li>
                    <li>
                        <img src={frase} alt="" />
                    </li>
                    <li>
                        <img src={frase} alt="" />
                    </li>
                    <li>
                        <img src={frase} alt="" />
                    </li>
                </ul>

            </div>
        );
    }
}

export default Home;