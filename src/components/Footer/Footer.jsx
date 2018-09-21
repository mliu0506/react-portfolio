import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer id="contact" className='py-4 bg-dark'>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <h2 className='text-center'>Contact</h2>
                                <p className='text-center mb-12'>Have a project you need help on? Feel free to contact me and we'll see if we can work something out. Thanks!</p>
                                <div className='text-center'>
                                    <a href="mailto:michaelliu56@gmail.com" className="mx-auto link">michaelliu56@gmail.com</a>
                                    <div className="">
                                        <a href="https://github.com/mliu0506"><i className="fab fa-github"></i></a>
                                       
                                        <a href="https://www.linkedin.com/in/michael-liu-12809113a/"><i className="fab fa-linkedin"></i></a>
                
                                    </div> 
                                </div>    
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;