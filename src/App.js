import Menu from "./components/Menu";
import Creditos from "./pages/creditos/Creditos";
import Principal from "./pages/home/Principal";
import Projetos from "./pages/Projetos/Projetos";
import SobreMim from "./pages/SobreMim/SobreMim";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path='/sobremim' element={<SobreMim/>}/>
            <Route path='/projetos' element={<Projetos/>}/>
            <Route path='/creditos' element={<Creditos/>}/>
          </Routes>
        </BrowserRouter> 
    </>
  );
}

export default App;
