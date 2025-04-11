
import Footer from './Components/Footer/Footer';
import MainHome from './Components/Homepage/MainHome';
import Navigation1 from './Components/Navbar/Navbarpages/Navigation1';
import Navigation2 from './Components/Navbar/Navbarpages/Navigation2';
import Navigation3 from './Components/Navbar/Navbarpages/Navigation3';
import './index.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
   <Navigation1/>
 <div className='hidden lg:flex'> <Navigation2/> </div>
 <div className=' lg:hidden'> <Navigation3/></div>

       <Routes>

    <Route path='/'element={<MainHome/>}/>


      </Routes>
      {/* <div className='hidden lg:block'> <Footer/> </div> */}
      
      </Router>
    </>
  );
}

export default App;
