import './App.css';
import Navbar from './views/Navbar/Navbar';
import Sidebox from './views/Sidebox/Sidebox';
import Banner from './views/Banner-1/Banner-1';
import Footer from './views/Footer/Footer';
import Fourpoint from './views/Fourpoints/Fourpoints';
import Aboutus from './views/Aboutus/Aboutus';
import Activities from './views/Activities/Activities';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Aboutus/>
      <Sidebox/>
      {/* <Activities/> */}
      <Fourpoint />
      <Footer />
    </div>
  );
}

export default App;
