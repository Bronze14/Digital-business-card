import React from 'react';
import Vector from '../images/Vector.png'
export default function Main(){
    return (

        <div className='Name1-bar'>
            <h1 className='Name1'>Laura Smith</h1>
            <h5 className='Name2'>Frontend Developer</h5>
            <h6 className='Email1'>laurasmith.website</h6>
            <button className='Button1'>Email</button>
            <button className='Button2'><img src={Vector}/>LinkedIn</button>
            <h2 className="About-bar1">About</h2>
            <h5 className='About-bar2'>I am a frontend developer with a particular interest 
                    in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, 
                    and am always looking for new things to learn.</h5>
            <h2 className="About-bar1">Interests</h2>
            <h5 className='About-bar2'>Food expert. Music scholar. Reader. Internet fanatic.
                    Bacon buff. Entrepreneur. Travel
                    geek. Pop culture ninja. Coffee fanatic.</h5>
        </div>
   
    )
}