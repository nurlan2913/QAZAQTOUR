import './Gallery.css'
import React, {useState} from 'react'


export default function Gallery() {
  
  return (
    <>
      <div className="mt-120 blok columns-1 sm:columns-3 md:columns-4  ">
       
        <img className='aspect-[4/3] object-cover mb-5 rounded-lg ' src="/public/Photo/KolsaiLake.jpeg" alt="" />
        <img className='size-120 rounded-lg' src="/public/Kolsai/The Valley of Castles, Charyn Canyon - Kazakhstan.jpeg" alt="" />
         
        <img  className='size-120 mb-5 rounded-lg ' src="/Kolsai/view lake forest mountains.jpeg" alt="" />
        <img className='aspect-[4/3] rounded-lg object-cover object-' src="/public/Kolsai/Beautiful trip to Kolsay lakes in Kazakhstan.jpeg" alt="" />
              
        <img  className='size-100 mb-5 rounded-lg' src="/public/Kolsai/koolsai.jpeg" alt="" />
        <img className='aspect-[1/1] rounded-lg object-cover ' src="/public/Kolsai/Kolsay lake.jpeg" alt="" />
             
        <img className='size-110 w-full mb-5 object-cover rounded-lg' src="/public/Kolsai/kolsa.jpeg" alt="" />
        <img className=' size-72 w-full object-cover rounded-lg' src="/public/Kolsai/Beautiful trip to Charyn  in Kazakhstan.jpeg" alt="" />
            
        
        
      </div>  
    </>
  );
}
