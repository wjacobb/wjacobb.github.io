import './App.css';
import ContactForm from './components/Contact.js'
import Hero from './components/Hero.js'
import Info from './components/Info.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Info/>
      <ContactForm/>
    </div>
  );
}

export default App;
