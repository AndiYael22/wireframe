import logo from './logo.svg';
import './App.css';
import { Principal } from "./Principal"
import { Footer } from './componentes/Footer';
import { Header } from './componentes/Header';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
     <Header/>
       <Principal/>
       <Footer/>
    </div>
  
  );
}

export default App;
