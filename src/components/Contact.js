

import React, { useState, useTran, Fragment, useEffect, useRef } from 'react';
import RenderSvg from '../helpers/RenderSVG';
import {json2} from './exp';
import './comp.css';

function Contact(props) {
    const matchesQuery = props.matchesQuery;
    return (
        <section id='contacts' className="section scrollspy" style={{ opacity: 0.7, height: 750 }}>
            <h3 class="page-title white-text teal">Contact</h3>
            <div class="container" style={{width : '95%'}}>
      <p>
        <a aria-label="Email Andrew" href="mailto:jihyeonjeong1117@gmail.com" class="hoverline">jihyeonjeong1117@gmail.com</a>
      </p>
      <p>
<a aria-label="Andrew on Github" href="http://github.com/jihyeonjeong11" class="hoverline">https://github.com/jihyeonjeong11</a>
      </p>
      <p>
 <a aria-label="Andrew on LinkedIn" href="http://linkedin.com/in/andrewborstein" class="hoverline">https://www.linkedin.com/in/jihyeon-jeong/</a>
      </p>
    </div>
        </section>
    );
}


export default Contact;
