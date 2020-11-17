import React, { useState, useEffect, useTran } from 'react';
import './App.css';
import M from "materialize-css/dist/js/materialize.min.js";
import {scrollToEle} from './helpers/helperFuncs';
import Scrollspy from './SideBar/ScrollSpy';

const listArr = ['about', 'experience', 'projects', 'skills', 'contacts']


export const Navbar = (props) => {
    let matchesQuery = props.matchesQuery;
    const [activeIdx, setActiveIdx] = useState(null);
    useEffect(() => {
        var sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});

        //     window.yPositionArr = [
        //     document.getElementById('about').offsetTop+document.getElementById('about').offsetHeight,
        //     document.getElementById('experience').offsetTop+document.getElementById('experience').offsetHeight,
        //     document.getElementById('projects').offsetTop+document.getElementById('projects').offsetHeight,
        //     document.getElementById('skills').offsetTop+document.getElementById('skills').offsetHeight,
        //     document.getElementById('contacts').offsetTop+document.getElementById('contacts').offsetHeight,
        //     ]
        //     console.log(window.yPositionArr)

        // window.addEventListener('scroll', function(e) {
        //     const yPos = window.pageYOffset;
        //     const yArr = window.yPositionArr;
        //     let result = 0;
        //     for(let i in yArr){
        //         if(yPos > yArr[i]){
        //             continue;
        //         }
        //         else{
        //             result = i;
        //             break;
        //         }
        //     }
        //     setActiveIdx(result)
            

        // })
    }, []);


    return (
        <div>


            <nav >

    
                <ul className="sidenav sidenav-fixed" id="mobile-nav" >
                    <div class='valign-wrapper' style={{justifyContent: 'center'}}>
                      <img src={require('./images/0.jpg')} class='center-align' style={{ height: 150, borderRadius: 100, marginTop: 20}} />
                    </div>
                    <li>
                        <div className="divider blue-grey darken-2" />
                    </li>
                    {listArr.map((item, idx) => {
                        return (
                                <li>
                                  <a 
                                  href={`#${item}`} 
                                  className="tan-text menu-item" 
                                 
                                  id={`#${item}`} 
                                  onClick={(e)=>{
                                    scrollToEle(e, item)
                                    }}>
                                    {item}
                                  </a>
                                </li>
                            )
                    })}


                    <li>
                        <a href="" className="tan-text menu-item" onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://1drv.ms/w/s!As-xro1pkHMwgbY3uXt9YABVXf7sLA?e=KtHfIb')
                        }}>
                            resume
                        </a>
                    </li>
                </ul>

            </nav>}
            
        </div>
    );
};
export default Navbar;

