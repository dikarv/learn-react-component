import './App.css';
import NavbarComponent from './Navbar';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import GrandParent from './grand-child';


function App() {
  return (
    <div className='App'>
        <Header/>
        <NavbarComponent/>
        <Content/>
        <Footer/>       
        <GrandParent/>
            </div>
    
  );
}

export default App;
//export file