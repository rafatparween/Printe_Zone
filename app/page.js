import AboutUs from './components/AboutUs';
import Faq from './components/Faq';
import Footer from './components/Footer';
// import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ServicesSection from './components/Services';
// import Work from './components/Work';


function Home(){
  return(
    <>
      <Navbar/>
      <AboutUs/>
      <ServicesSection/>
      <Faq/>
      <Footer/>
      
    </>
  )
}
export default Home;