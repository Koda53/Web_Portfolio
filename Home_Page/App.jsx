import Navbar from './components/Navbar.jsx'
import Profilesection from './components/Profilesection.jsx'
import Buttons from './components/Buttons.jsx'
import About from './components/about.jsx'
import Footer from './components/footer.jsx'
import Quotes from './components/Quotes.jsx'

function App() {
    return(
      <div>
      <Navbar />
      
      <section id ="home" className="h-[100vh] flex justify-center items-center text-center bg-white relative">
        <Profilesection />
        <Buttons/>
      </section>
      
      <section>
        <Quotes/>
      </section>
      
      <section>
        <About/>
      </section>
      
      <section>
        <Footer/>
      </section>
    </div>
     
    );
}

export default App
