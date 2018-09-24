import React, { Component } from 'react';
import './Header.css';
import $ from 'jquery';
import HeadShot from '../../assets/images/michael.jpg';


const style = {
    name: {
        fontSize: '60px'
    },
    label: {
        fontSize: '24px'
    }
}

class Header extends Component{

    componentDidMount(){
        $('.head-content').hide();
        $('.head-content').fadeIn(2200);
    }
    render(){
        return(
            <header className="head vh-102 text-white">
                <div className="row vh-102 justify-content-center align-items-center">
                <video playsInline autoPlay loop muted id="main-video" >
                    <source src="https://res.cloudinary.com/dvp0y7ati/video/upload/v1537781726/elephants-bg.mp4" type="video/mp4"></source>
                </video>

                    <div className="head-content text-center mx-auto col">
                        <img alt='Michael Liu' src={HeadShot} className="headshot"/>
                        <h1 style={style.name} className="font-ezcar">Michael Liu</h1>
                        <p style={style.label} className="font-ezcar">Full Stack Developer | Professional Freelancer</p>
                        <a href="mailto:michaelliu56@gmail.com" className="link font-monospace my-4">michaelliu56@gmail.com</a>
                        <br/>
                        <div className="font-ubuntu page-links">
                            <a href="#about">About</a> | <a href="#portfolio">Portfolio</a> | <a href="#contact">Contact</a> 
                        </div>
                        <div>
                            <a href="https://github.com/mliu0506"><i className="fab fa-github"></i></a>
                           
                            <a href="https://linkedin.com/in/michael-liu-12809113a/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default Header;