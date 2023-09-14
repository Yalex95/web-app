import React from 'react'
import { useFetch } from "./useFetch"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Card from "./components/card";
const Home = () => {
    const {data, loading } = useFetch();
  return (
    
    <>
    <div className="container">
      <h1>Best Anime Compilation!</h1>
      
    </div>
    <div className="container">
    <p>hover to see the effects!</p></div>
    <div className="container">
         {loading && <p>Loading...</p>}
      {data?.data.map((item, index)=>(
        
        <Card key={item.mal_id} id={item.mal_id} 
        img={item.images.webp.large_image_url}
        title={item.title_english}
        synopsis={item.synopsis}
        url={item.url}/>
      ))}
    </div>
    </>
  )
}

export default Home