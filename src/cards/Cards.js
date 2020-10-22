import React from 'react';
import CardContent from './CardContent';
import '../App.css';

const goodArr1 = [
  {
    goodsNm: 'Flyingcat android',
    thumbnail: require('../imgs/myflyingcatapp.jpg'),
    link: 'https://play.google.com/store/apps/details?id=com.crunch.priceaos&hl=ko',
    text: 'go to store'
  },
  {
    goodsNm: 'Flyingcat ios',
    thumbnail: require('../imgs/myflyingcatapp.jpg'),
    link: 'not',
  },
  {
    goodsNm: 'Flyingcat web',
    thumbnail: require('../imgs/flyingcat.jpg'),
    link: 'https://myflyingcat.com',
    text: 'go to url'
  },

]

function Cards(props) {
  const goodArr = props?.goodArr || goodArr1;
  const matchesQuery = props.matchesQuery;
  return (
    <div >
      <h3 className='cardTitle mb-3'>My works</h3>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row justify-content-space-between pt-0">

          {goodArr.map((item, index) => {
            return (

              <div className="col-md-4 justify-content-center align-items-center d-flex" style={{ marginBottom: !matchesQuery ? 20 : 0 }}>
                <CardContent item={item} index={index} />
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cards;