

import React, { useState, useTran, Fragment, useEffect, useRef } from 'react';
import RenderSvg from '../helpers/RenderSVG';
import {json2} from './exp';
import './comp.css';

function Projects(props) {
    const matchesQuery = props.matchesQuery;
    return (
        <section id='projects' className="section scrollspy" style={{ opacity: 0.7 }}>
            <h3 class="page-title white-text teal">Projects</h3>
            <div class='container'>
                <div class='row'>
                    {json2.map((item, idx) => {
                        return (
                            <div class="col s12 m6 l4" key={idx+'proj'}>
                                <div class="card medium">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img alt="Screenshot of Vegetas app" src={item.imgPath} class="activator" />
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title activator teal-text hoverline">{item.project}<i class="mdi-navigation-more-vert right"></i></span>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div class="card-reveal">
                                        <span class="card-title brown-text">Roles<i class="mdi-navigation-close right"></i></span>
                                        <ul>
                                            <li>{item.act1}</li>
                                            <li>{item.act2} </li>
                                            <li>{item.act3}</li>
                                        </ul>
                                        <div class="card-action">
                                            <a href={item.link1} target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light brown tooltipped">
                                                <i className="material-icons">link</i>
                                            </a>
                                            <a href={item.link2} target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light brown tooltipped">
                                                <i className="material-icons">code</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )
                    })}

                </div>
            </div>
        </section>
    );
}


export default Projects;
