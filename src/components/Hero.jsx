import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import  heroBcg from '../assets/hero-bcg.jpeg'
import  heroBcg2 from '../assets/hero-bcg-2.jpeg'

function Hero() {
  return (
    <Wrapper>
      <article className='hero'>
        <div className="hero-text">
          <h1>Design Your<br/> Comfort Zone</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, 
            at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
             aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
        </p>        
        <Link to='/products' className='btn hero-btn'>
            Shop Now
        </Link>    
        </div>
        <div className="hero-image">
            <img src={heroBcg} alt="main-img" className='main-img'/>
            <img src={heroBcg2} alt="accent-img" className='accent-img'/>
        </div>
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    width: 85vw;
    margin: 0 auto;
    min-height: 60vh;
    

    .hero-text h1{
        font-size: 2.8rem;
        font-family: arial;
        letter-spacing: 1px;
        line-height: 3.5rem;
    }
    .hero-text p{
        font-size: 1.2rem;
        letter-spacing: 1px;
        line-height: 2rem;
    }
    .hero-image{
        display: none;
    }
    .hero-btn {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-family: arial;
        margin-top: 2rem;
    }
    @media (min-width: 992px){
        
        .hero{
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 10rem;
        }
        .hero-image{
            display: block;
            position: relative;
        }
        .main-img{
            width: 25rem;
            position: relative;            
            display: block;
            height: 550px;
            border-radius: 4px;
        }
        .accent-img{
            position: absolute;
            width: 250px;
            bottom: 0;
            left: 0;
            transform: translateX(-50%);
            border-radius: 4px;
        }
        .hero-image::before {
            content: '';
            position: absolute;
            width: 10%;
            height: 80%;
            background: hsl(212, 33%, 89%);
            bottom: 0%;
            left: -8%;
            border-radius: 5px;
          }
    }
    
`

export default Hero