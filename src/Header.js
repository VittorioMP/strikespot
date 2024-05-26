import React from 'react';
import { Link } from 'react-router-dom';
import Slika from './strikespotlogo.jpg';

function Header() {
  return (
    <div className="Header">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Slika} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li><Link to="/novosti">NOVOSTI</Link></li>
          <li><Link to="/utakmice">UTAKMICE</Link></li>
          <li><Link to="/rezultati">REZULTATI</Link></li>
          <li><Link to="/kladenje">KLAĐENJE</Link></li>
          <li><Link to="/natjecanja">NATJECANJA</Link></li>
          <li><Link to="/onama">O NAMA</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;


