import React from 'react'
import Home from './UI_Pages/components/Home'
import Footer from './components/Foter/Footer'
import SpecializationSection from './components/Specialization_page/Specialization'
import Contact from './components/contact_page/Contact'
import FAQ from './components/faq_page/Faq'
import News from './components/latest_news_page/News'
import PatientCaring from './components/Patient_caring/Patient_caring'
import Ourfamily from './components/our_famiies/OurFamilies'

function Main() {
    return (
        <>
            <Home />
            <SpecializationSection />
            <PatientCaring />
            <News/>
            <Ourfamily/>
            <FAQ/>
            <Contact />
            <Footer />
        </>
    )
}

export default Main
