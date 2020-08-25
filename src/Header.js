import React from 'react';




function Header(props) {
    const matchesQuery = props.matchesQuery;
    return (
        <header className={'headerArea'}  >
           
            <div className={'headerContent'}>
                <div>
                    <div>
                        <span style={{ color: 'white' }}>JIHYEON JEONG</span>
                    </div>

                </div>
               { matchesQuery === 'mobile' ?
               <div style={{ display: 'flex', justifyContent: 'space-between', }}>

               <div>
                   <a href="http://au.linkedin.com/in/jihyeon-jeong" title="Connect with me on Linkedin" target="_blank">hamberger</a>
               </div>

           </div>
               :

               <div style={{ display: 'flex', justifyContent: 'space-between', width: '20%' }}>
                    <div>
                        <span tooltip='asoi' style={{ color: 'white' }}>email</span>
                    </div>
                    <div>
                        <a href="http://au.linkedin.com/in/jihyeon-jeong" title="Connect with me on Linkedin" target="_blank">linkedin</a>
                    </div>

                </div>
}
            </div>

        </header>


    );
}

export default Header;
