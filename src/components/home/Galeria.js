import React from 'react';
import './Home.css';
import pollo from '../../assets/pollo.png';

class Galeria extends React.Component {


    render (){
        return (
            <div className='galeria'>
                <div className="flexi">
                    <div className="padre">
                            <div className="gemelo">
                                <div className="uno"></div>
                            </div>

                        <div className="gemelo">
                            <div className="dos"></div>
                        </div>
                    </div>
                    <div className="padre">
                        <div className="hijo">
                            <div className="tres"></div>
                        </div>
                    </div>
                    <div className="padre">
                        <div className="gemelo">
                            <div className="cuatro"></div>
                        </div>
                        <div className="gemelo cinco">
                            <div className="cinco"></div>
                        </div>
                    </div>
                    <div className="madre">
                        <div className="prima">
                            <div className="seis"></div>
                        </div>
                        <div className="primo">
                            <div className="siete"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Galeria;