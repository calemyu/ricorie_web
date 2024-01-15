import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Concept, Talents, Footer }  from './components';
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white-100">          
        
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>

        <About/>
        <Concept/>
        <Talents/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
