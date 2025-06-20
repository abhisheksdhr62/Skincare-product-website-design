
import Navbar from './components/Navbar/Navbar'
import Page1 from './components/page1/Page1'
import Features from './components/features/Features'
import BestSeller from './components/bestseller/Bestseller'
import Faqsection from './components/Faqsection/Faqsection'
import Hero from './components/Hero/Hero'
import FilterProductSection from './components/FilterProductSection/FilterProductSection'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Page1/>
    <Features/>
    <BestSeller/>
    
    <Hero/>
    <FilterProductSection/>
    <Faqsection/>
    <Footer/>

    </>
  )
}

export default App