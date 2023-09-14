import React from 'react'
import UpperCasePipe from './Title';

const Card = ({id,img,title,synopsis,url}) => {
    
  return (
    
    <>
    
    <div key={id} className="card"  
        style={{ backgroundImage: `url(${img})` }}>
         <div className="overlay"></div>
         <div className="desc">
            <h3>{(title != null)? UpperCasePipe(title):title}</h3>
            <p className="anime-text">{synopsis}</p>
            <a href={url}>More Info</a>
         </div>
        </div>
    </>
  )
}

export default Card