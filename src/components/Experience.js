

import React, { useState, useTran, Fragment, useEffect, useRef } from 'react';
import RenderSvg from '../helpers/RenderSVG';
import {json} from './exp';
import './comp.css';

function Experience(props) {
    const matchesQuery = props.matchesQuery;
    return (
        <section id='experience' className="section scrollspy" style={{ opacity: 0.7 }}>
            <h3 class="page-title white-text teal">Experience</h3>
            {json.map((item, idx) => {
                return (
                    <div class='container' key={idx+'exp'}>
                <div class="card m10" style={{ width: '100%' }}>
                    <div class="card-content">
                        <div class="row">
                            <p>
                                <span class="card-title"><a href={item.anchor} target="_blank" class="teal-text hoverline">{item.company}</a></span>
                            </p>
                        </div>
                        <div class="role brown-text">{item.role}</div>
                        <p>
                            <em class="grey-text">{item.activity}</em>
                        </p>
                        <h6>업무 내역</h6>
                        <ul>
                            <li>
                              {item.act1}
                            </li>
                            <li>
                              {item.act2}
                            </li>
                            <li>
                              {item.act3}
                            </li>
                            <li>
                                {item.tools}
                            </li>
                        </ul>
                        <h6>성취</h6>
                        <ul>
                            <li>
                              {item.cheevo1}
                            </li>
                            <li>
                              {item.cheevo2}
                            </li>
                            <li>
                              {item.cheevo3}
                            </li>
                        </ul>
                    </div>
                    <div class="card-action">
                        <span>{item.timelocaiton}</span>
                    </div>
                </div>
            </div>
                )
            })}
        </section>
    );
}


export default Experience;
