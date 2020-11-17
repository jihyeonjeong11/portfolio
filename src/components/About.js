import React, { useState, useTran, Fragment, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitTextToChars } from '../helpers/animationFunc';
import './comp.css';

function About(props) {
    const matchesQuery = props.matchesQuery;


    return (
        <section id='about' className="section scrollspy" style={{ opacity: 0.7 }}>
            <h3 class="page-title white-text teal">About</h3>
            <div class='container flow-text'>
                <blockquote>
                    <h2>되어야 할 것을 되게 만드는 프론트엔드 개발자입니다.</h2>
                </blockquote>
                <p>
                    저는 항상 주도적으로 계획하고, 실현하는 것을 꿈꾸었습니다.
                    개발자가 되기 이전 영어 강사, 무역, 게임 로컬라이제이션 및 qa와 같은 직종에 종사하며 프로젝트 완결을 보조했고
                    지금은 자신이 직접 끝맺음하고 있습니다.
                </p>
                <p>
                    웹 개발자로써 저는 필요하다고 생각하는 일을 진행합니다. 시행착오를 통해 새 기술과 기법을 도입하고 이것이 회사와 저의 성장에 도움이 된다고 믿습니다.
                </p>
                <p>
                    <strong>Current Focus</strong>:&nbsp;<a aria-label="" href="">Python</a>&nbsp;//&nbsp;<a aria-label="" href="">Backend</a>&nbsp;//&nbsp;<a aria-label="" href="">Responsive Design Pattern</a>
                </p>
            </div>

        </section>
    );
}


export default About;