import React from 'react';
import './Contador.css';
import $ from 'jquery';

class Contador extends React.Component {

    componentDidMount(){
        $('.number').each(function(){
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            },{
                duration:4000,
                easing: 'swing',
                step: function(now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
    render (){
        return (
            <div className='ache'>
                <h2>¡Gran Inauguración!</h2>
                <div className='count '>
                    <div className='count_data'>
                        <p className='signo' ><span className='number'>20</span> de Noviembre</p>
                    </div>
                    <br/>
                    <div className='count_data'>
                        <p className='signo' ><span className='number'>8</span> pm</p>

                    </div>


                </div>
            </div>
        )
    }
}

export default Contador;