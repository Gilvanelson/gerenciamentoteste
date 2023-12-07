import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import stilo from './Home.css'

function Home (){
    return(
      <div>
          <h1 className={stilo.titulo}>
            Gerenciamento de Arquivos & Midias
          </h1>

          <nav className={stilo.naveg}>
            <Link pathName="./Login.js">Login</Link>
            <a href="Cadastro.html">Cadastro</a>
          </nav>

          <footer>
            <h6>Direito reservado GN</h6>
         </footer>
      </div>
    
     

      
    
    

      
        
      

    
    );
}
export default Home;
