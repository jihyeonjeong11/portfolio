import React, { useState, useTran, Fragment, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitTextToChars } from '../helpers/animationFunc';
import './comp.css';
import {json3} from './exp';



function About(props) {
    const matchesQuery = props.matchesQuery;
    return (
        <section id='skills' className="section scrollspy" style={{ opacity: 0.7 }}>
            <h3 class="page-title white-text teal">Skills</h3>
            <div class='container'>
                {json3.map((item, index) => {
                    return (
                    <div class="card" style={{ minWidth: '80%', marginBottom: 30 }} key={index+'skill'}>
                         <div class="card-content">
                            <h4 class="brown-text light">{item.title}</h4>
                            <div class="row text-center">
                            {item.elements.map((ele, idx) => {
                                return (
                                    
                            <div class="col center-align">
                                <img alt="" src={ele.imgPath} class="responsive-img" />{ele.name}
                            </div>
                       
                                )
                            })}
                             </div>
                         </div>
                    </div>
                    )
                })}
                {/* <div class="card" style={{ minWidth: '80%' }}>
                    <div class="card-content">
                        <h4 class="brown-text light">HTML</h4>
                        <div class="row text-center">
                            <div class="col center-align">
                                <img alt="" src={require('../images/html5.png')} class="responsive-img" />HTML5
                            </div>
                            <div class="col center-align">
                                <img alt="" src={require('../images/react.png')} class="responsive-img" />JSX
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

        </section>
    );
}


export default About;