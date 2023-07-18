import './App.css';

//Pages
import HomePage from "./Pages/Home/HomePage"
import AboutPage from "./Pages/About/AboutPage"
import ContactPage from "./Pages/Contact/ContactPage"
import ShopPage from './Pages/Shop/ShopPage';
import RelojDetail from './Pages/RelojDetail/RelojDetail';
import RelojMarcaPage from "./Pages/RelojMarca/RelojMarcaPage"
//router Dom 
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

//components  
import ResponsiveNavigation from './components/ResponsiveNavigation/ResponsiveNavigation';

//context
import { RelojesProvider } from './context/RelojesContext';

function App() {

  return (
  <RelojesProvider>
    <Router>
      <div className='contenedorTodo'>
        <ResponsiveNavigation/>
        
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/about' element = {<AboutPage/>} />
          <Route path='/contact' element = {<ContactPage/>} />
          <Route path='/shop' element = {<ShopPage/>} />
          <Route path='/detail/:id' element = {<RelojDetail/>} />
          <Route path='/marca/:name' element = {<RelojMarcaPage/>} /> 

        </Routes>
      
      </div>
    </Router>
  </RelojesProvider>
  );
}

export default App;
