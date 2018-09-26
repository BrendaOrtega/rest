import React from 'react';
import './Home.css';
import log from  '../../assets/log.png';

class Footer extends React.Component {


    render (){
        return (
            <div className='footer'>
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="" >
                    <div className="uk-navbar-center">
                        <ul className="uk-navbar-nav">
                            <li>
                                <a target="_blank" href="https://www.facebook.com/fixterme/">
                                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: facebook"></span>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/fixtergeek/">
                                    <span className="uk-icon uk-margin-small-right" uk-icon="icon: instagram"></span>
                                    Instagram
                                </a>
                            </li>
                            <li class="uk-nav-divider"></li>
                            <li>
                                <a style={{ pointerEvents: 'none', cursor: 'default' }} href="">
                                    Arango Restaurant, {new Date().getFullYear()}™
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
                <img src={log} alt=""/>

            </div>
        )
    }
}

export default Footer;