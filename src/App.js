import logo from './logo.svg';
import './App.css';
import './index.css';
import { Principal } from "./Principal"
import { Footer } from './componentes/Footer';
import { Header } from './componentes/Header';
import { Menu } from './componentes/Menu';
import { Informacion } from './componentes/Informacion';
import "bootstrap/dist/css/bootstrap.min.css"
import { Regiones } from './componentes/Regiones';
import { Legendarios } from './componentes/Legendarios';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
  
    <div className="App">
        <Router>
     <Header/>
     <Menu/>
     <Informacion/>
       <Principal/>
       <Regiones/>
       <Legendarios/>
       <Footer/>
       </Router>
    </div>
  
  );
}

export default App;
