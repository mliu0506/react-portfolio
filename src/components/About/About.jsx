import React, { Component } from 'react';
import './About.css';

// import jekyll from '../assets/images/jekyll.png';

class About extends Component{
    render(){
        return(
            <section className="font-ubuntu py-4 bg-dark" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <h2 className="text-center highlight">About Me</h2>
                                <p className='text-center'>
                                
                                Over 10 years experience in successful IT system implementation, working for multinational Financial and Insurance Corporation.
                                
                                Has a Bachelor of Electronic Engineering, Computer Science, and graduated in University of Toronto's Coding Boot Camp specializing in Full Stack (includes HTML5, CSS3, Bootstrap4, JavaScript, Jquery, Node.jS, Express.js, React.js, .Net, Java, Firebase, MongoDB, MySQL, Oracle, etc.)
                                
                                Enjoys leveraging background in digital transformation and financial knowledge to provide unique perspectives on how end-users interact with websites and software platforms. 
                                
                                Passionate about approaching programming challenges from different angles, and collaborating with others to create meaningful web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <p className="font-italic">Result-driven full stack developer focused on creating competitive advantage by delivering goal-orientated, simplified user interface that fosters increased productivity. Always with a positive attitude in taking a concept and turn it into a finished product.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mx-auto my-3 text-center" data-aos="flip-down">
                           
                            <i className="devicon-html5-plain-wordmark colored devicons"></i>
                            <i className="devicon-css3-plain-wordmark colored devicons"></i>
                            <i className="devicon-bootstrap-plain-wordmark colored devicons"></i>
                            <i className="devicon-javascript-plain colored devicons"></i>
                            <i className="devicon-jquery-plain-wordmark colored devicons"></i>
                            <i className="devicon-amazonwebservices-plain-wordmark devicons"></i> 
                            <i className="devicon-angularjs-plain colored devicons"></i>
                            <i className="devicon-express-original-wordmark devicons"></i>
                            <i className="devicon-heroku-line-wordmark colored devicons"></i>
                            <i className="devicon-wordpress-plain-wordmark devicons"></i>
                            <i className="devicon-react-original-wordmark colored devicons"></i>
                            <i className="devicon-mongodb-plain-wordmark devicons"></i>
                            <i className="devicon-nodejs-plain-wordmark colored devicons"></i>
                            <i className="devicon-mysql-plain-wordmark devicons"></i>
                            <i className="devicon-github-plain devicons"></i>
                        </div>
                    </div>
                    <br/>
                    <div data-aos="flip-right">
                        <div className="row">
                            <li className="col-md-2 col-xs-6 languages">HTML</li>
                            <li className="col-md-2 col-xs-6 languages">CSS</li>
                            <li className="col-md-2 col-xs-6 languages">Bootstrap</li>
                            <li className="col-md-2 col-xs-6 languages">Javascript</li>
                            <li className="col-md-2 col-xs-6 languages">JQuery</li>
                            <li className="col-md-2 col-xs-6 languages">MySQL</li>
                            <li className="col-md-2 col-xs-6 languages">Node.js</li>
                            <li className="col-md-2 col-xs-6 languages">RESTful APIs</li>
                            <li className="col-md-2 col-xs-6 languages">Angular</li>
                            <li className="col-md-2 col-xs-6 languages">Heroku</li>
                            <li className="col-md-2 col-xs-6 languages">React</li>
                            <li className="col-md-2 col-xs-6 languages">AWS</li>
                            <li className="col-md-2 col-xs-6 languages">MongoDB</li>
                            <li className="col-md-2 col-xs-6 languages">Express</li>
                            <li className="col-md-2 col-xs-6 languages">WordPress</li>
                            <li className="col-md-2 col-xs-6 languages">Github</li>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
        )
    }
}

export default About;