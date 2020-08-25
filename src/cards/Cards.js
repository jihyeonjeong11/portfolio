import React from 'react';
import CardContent from './CardContent';

const goodArr1 = [
    {
      goodsNm: 'Flyingcat android',
      goodsNo: 1231,
      thumbnail: require('../imgs/myflyingcatapp.jpg')
    },
    {
      goodsNm: 'Flyingcat ios',
      goodsNo: 1242,
      thumbnail: require('../imgs/myflyingcatapp.jpg')
    },
    {
      goodsNm: 'Flyingcat web',
      goodsNo: 2232,
      thumbnail: require('../imgs/flyingcat.jpg')
    },

  ]

function Cards(props) {
    const goodArr = props?.goodArr || goodArr1;

    return (
        <div className="container-fluid d-flex justify-content-center">
             <div className="row">
            {goodArr.map((item,index) => {
                return (
                   
                    <div className="col-md-4">

                          <CardContent item={item} index={index}/>
                    </div>
                
                )
            })}
            </div>
           
        </div>
    )
}

export default Cards;