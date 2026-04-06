import { BrowserRouter as Router,Route,Routes,Link} from 'react-router';
import Equipo from './equipo'
import Original from './original'
import Home from './home'
import Favoritos from './favoritos'
import Informativa from './informativa'
import Usuarios from './usuarios'
import './App.css'

function App() {
return( 
<>
<Router>
  <Routes>

    <Route path= "/"element={<Home/>} />
    <Route path= "/favoritos" element={<Favoritos/>} />
    <Route path= "/original" element={<Original/>} />
    <Route path="/informativa" element={<Informativa/>} />
    <Route path= "/usuarios" element={<Usuarios/>} />
    <Route path= "/equipo/:equipo" element={<Equipo/>} />


</Routes>
<nav className="c-menu">
  <Link to ="/home"></Link>
<Link to ="/favoritos">favoritos</Link>
<Link to ="/original">original</Link>
<Link to ="/informativa">informativa</Link>
<Link to ="/usuarios">usuarios</Link>

</nav>

</Router>
</>
)

}
export default App
      
    