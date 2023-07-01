import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import WhatWeDo from './components/What-we-do/What-we-do'
import HowWedoit from './components/How-we-do-it/How-we-do-it'
import WhereWeWork from './components/WhereWeWork/where-we-work'
import HelpTop from './components/Help/help-top'
import HelpBottom from './components/Help/help-bottom'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
   <div className={""}>
    <Hero/>
    <WhatWeDo />
    <HowWedoit/>

    <div  className='image-container'   >
      <div  className='image'  >

        <h2>Where We Work</h2>


      </div>


</div>
    <WhereWeWork/>
    <HelpTop/>
    <HelpBottom/>
   
    
     


   </div>
  )
}
