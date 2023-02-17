import React from 'react';
import ImgTt from '../images/Twitter Icon.png'
import ImgFb from '../images/Facebook Icon.png'
import ImgIg from '../images/Instagram Icon.png'
import ImgGh from '../images/GitHub Icon.png'


export default function Footer(){
    return (
        <div className="Footer-bar">
        <img src={ImgTt} className="Footer-img"/>
        <img src={ImgFb} className="Footer-img"/>
        <img src={ImgIg} className="Footer-img"/>
        <img src={ImgGh} className="Footer-img"/>
        </div>

        
    )
}