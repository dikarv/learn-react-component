import './App.css';
import NavbarComponent from './Navbar';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import GrandParent from './Grand-child';
import Card from './Card';


function App() {
  let namae = "Lele";
  return (
 
    <div className='App'>
        <Header />
        <NavbarComponent/>
        <Content/>
        <Footer anak={"Ikan Mas"} />       
        <Card ikan={namae} ikan1={"ikan Kembung"}/>
            </div>
    
  );
}

export default App;
//export file