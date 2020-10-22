import React, {useState, useEffect} from 'react';
import './card-style.css';
const CardContent = props => {
    const [render, show] = useState(true);
    
    const item = props.item;
    const index = props.index;
    // useEffect(()=>{
    //     setTimeout(() => {
    //         show({hidden: true});
    //     }, index*1000);
    // }, [index])
    if(!render){
        return null;
    }
    return (
        <div className='card text-center'>
            <div className='overflow'>
                <img src={item.thumbnail} alt={`image${index}`} className='card-img-top' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{item.goodsNm}</h4>
                {item.link !=='not' ?
                <a href={item.link} target='blank'  className='btn btn-outline-success'>{item.text}</a>
                :
                <span>currently unavailable</span>
            }
            </div>
        </div>
    )
};

export default CardContent;