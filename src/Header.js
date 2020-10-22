import React, { useState, useTran } from 'react';
import RenderSVG from './helpers/RenderSVG';
import './App.css';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';


function Header(props) {
    const matchesQuery = props.matchesQuery;
    const [copy, setCopy] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [highlight, setHighlight] = useState(false);
    const listSwitch = () => {
        setMobileMenu(!highlight);
    };
    const toggleMenu = () => {
        
        mobileMenu ?
            // setTimeout(()=>setMobileMenu(!mobileMenu),1000)
            setMobileMenu(!mobileMenu)
            :
            setMobileMenu(!mobileMenu)
    }
    return (
        <header className={'headerArea container-fluid mb-5'}  >
            {matchesQuery === 'mobile' ?
                <div style={{ width: '100%' }}>
                    <div className={'headerContent'}>
                        <div className='d-flex align-items-center'>
                            <span style={{ color: 'white' }}>JIHYEON JEONG</span>
                        </div>


                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>

                            <div onClick={toggleMenu} className='d-flex  w-25 align-items-center' >
                                <img src='https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-27.jpg' width='40' height='40' />
                            </div>

                        </div>
                    </div>

                    <nav style={{ display: 'block' }} className='list-body'>
                        <CSSTransition
                            in={mobileMenu}
                            timeout={300}
                            classNames="list-transition"
                            unmountOnExit
                           // appear

                        >

                            <ul id="nav" className='headerNav list'>
                                <li class="headerItem"><a href="http://au.linkedin.com/in/jihyeon-jeong"><span style={{ color: 'white' }}>go to linkedin</span></a></li>
                                <li class="headerItem"><span onClick={() => {
                                    navigator.clipboard.writeText('jihyeonjeong1117@gmail.com');
                                    setCopy(true);

                                }} style={{ color: 'white', cursor: 'pointer' }}>{copy ? "copied!" : "copy my email address"}</span></li>

                            </ul>
                        </CSSTransition>
                    </nav>



                </div>
                :
                <div className={'headerContent'}>
                    <div className='d-flex align-items-center'>
                        <span style={{ color: 'white' }}>JIHYEON JEONG</span>
                    </div>
                    <div className='d-flex w-25 justify-content-space-evenly' style={{ justifyContent: 'space-evenly' }}>
                        <div>
                            <button
                                style={{ outline: 'none' }}
                                onMouseEnter={() => setCopy(false)}
                                className='mytooltip'
                                onClick={() => {
                                    navigator.clipboard.writeText('jihyeonjeong1117@gmail.com');
                                    setCopy(true);

                                }}>
                                <img src='https://www.pinpng.com/pngs/m/326-3269157_at-email-sign-png-picture-email-icon-white.png' width='25' height='21' style={{ border: '0px' }} />
                                <span class="mytooltiptext">{copy ? "copied!" : "Unfortunately, couldn't find email svg with transparent background so far... but you can still copy my email address when click!"}</span>
                            </button>

                        </div>
                        <div>
                            <a href="http://au.linkedin.com/in/jihyeon-jeong" title="Connect with me on Linkedin" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 448 512"><path fill="#ffffff" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z" /></svg>

                            </a>
                        </div>

                    </div>
                </div>
            }


        </header>


    );
}

export default Header;

//    <nav style={{display: mobileMenu ? 'block' :'none'}}>

// 					<ul id="nav">
// 						<li class="page_item page-item-2"><a href="http://www.adhamdannaway.com/about">about</a></li>
// <li class="page_item page-item-5"><a href="http://www.adhamdannaway.com/featured">featured</a></li>
// <li class="page_item page-item-7"><a href="http://www.adhamdannaway.com/portfolio">portfolio</a></li>
// <li class="page_item page-item-9"><a href="http://www.adhamdannaway.com/blog">blog</a></li>


// 						<li>
// 							<ul class="social">
// 								<li class="email"><span id="email-tooltip" tooltip="Click to copy my email address to your clipboard 😀"><a id="email" data-clipboard-text="adhamdannaway@gmail.com">email</a></span></li>
// 								<li class="twitter"><a href="http://www.twitter.com/AdhamDannaway" title="Follow me on Twitter" target="_blank">twitter</a></li>
// 								<li class="linkedin"><a href="http://au.linkedin.com/in/adhamdannaway" title="Connect with me on Linkedin" target="_blank">linkedin</a></li>
// 								<li class="facebook"><a href="http://www.facebook.com/ilikeadham" title="Like me on Facebook" target="_blank">facebook</a></li>
// 								<li class="dribbble"><a href="http://www.dribbble.com/adhamdannaway" title="See my Dribbble shots" target="_blank">dribbble</a></li>
// 							</ul>
// 						</li>

// 					</ul>

// 				</nav>