import React, {useState, useEffect} from 'react';
import './card-style.css';
const CardContent = props => {
    const [render, show] = useState(false);
    
    const item = props.item;
    const index = props.index;
    useEffect(()=>{
        setTimeout(() => {
            show({hidden: true});
        }, index*1000);
    }, [index])
    if(!render){
        return null;
    }
    return (
        <div className='card text-center'>
            <div className='overflow'>
                <img src={item.thumbnail} alt={`image${index}`} className='card-img-top' />
                <div style={{marginTop: 15}} />
                <button onClick={()=>null}>{''}</button>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{item.goodsNm}</h4>
                <p className='card-text text-secondary'>{item.goodsNo}</p>
                <a href='#' onClick={()=>console.log(props)} className='btn btn-outline-success'>go anywhere</a>
   
            </div>
        </div>
    )
};

export default CardContent;