import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import './App.css'
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio';
import Footer from './components/common/Footer';

function App() {
 
  return (
    <>
    <Menu></Menu>
    <Inicio></Inicio>
    <Footer></Footer>
    </>
  )
}

export default App
