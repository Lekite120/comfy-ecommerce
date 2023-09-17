import React from 'react'
import Hero from '../components/Hero'
import { styled } from 'styled-components'
import FeaturedProducts from '../components/FeaturedProducts'
import Contact from '../components/Contact'
import Services from '../components/Services'

function Home() {
  return (
    <Wrapper>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </Wrapper>
  )
}
const Wrapper = styled.section`
`

export default Home