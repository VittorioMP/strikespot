import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Kladenje from './Components/Kladenje';
import Utakmice from './Components/Utakmice';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Rezultati from './Components/Rezultati';
import Login from './Components/Login';
import Natjecanja from './Components/Natjecanja';
import Onama from './Components/Onama';
import Novosti from './Components/Novosti';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/novosti" element={<Novosti />} />
          <Route path="/kladenje" element={<Kladenje />} />
          <Route path="/rezultati" element={<Rezultati/>} />
          <Route path="/utakmice" element={<Utakmice/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/natjecanja" element={<Natjecanja/>}/>
          <Route path="/onama" element={<Onama/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
