import '../App.css';
import Slika from './instagram.jpg';
import Slika1 from './hltvorg.png';
export default function Onamadruga({ pro }) {
    const instagramProfileUrl = "https://www.instagram.com/v.mihaljevic";
  return (
    <div className="onama-container">
      <p className="onama-text">Autor:</p>
      <p className="onama-text">{pro.napravio}</p>
      <p className="onama-text">Škola:</p>
      <p className="onama-text">{pro.skola}</p>
      <p className="onama-text">Razred:</p>
      <p className="onama-text">{pro.razred}</p>
      <p className="onama-text">Započeo:</p>
      <p className="onama-text">{pro.zapoceo}</p>
      <p className="onama-text">Završio:</p>
      <p className="onama-text">{pro.zavrsio}</p>
      <p className="onama-text">O stranici:</p>
      <p className="onama-text">{pro.ostranici}</p>
      <p className="onama-text">Instagram:</p>
      <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
        <img src={Slika} alt="Instagram Logo" />
      </a>
      <p className="onama-text">Naš partner:</p>
      <a href="https://www.hltv.org/" target="_blank" rel="noopener noreferrer">
        <img src={Slika1} alt="HLTV ORG" />
      </a>
    </div>
  );
}
