import '../App.css';
import Onamadruga from './Onamadruga';

function Onama(){
    let onama={napravio:"Vittorio Mihaljević Parat",skola:"Škola za dizajn, grafiku i održivu gradnju - Split", razred:"g2p",zapoceo:"8.5.2024.", zavrsio:"26.5.2024.", ostranici:"Ova stranica pruža pregled rezultata natjecanja u igrici Counter Strike 2, kao i najnovije vijesti i informacije o klađenju. Sadrži detalje o timovima, rezultate utakmica, analize performansi i mogućnosti klađenja na nadolazeće događaje. Uz to, pruža korisnicima mogućnost praćenja razvoja događaja u svijetu e-sporta te donošenja informiranih odluka o klađenju."}
    return(
        <div className="onama">
            <Onamadruga pro={onama}/>
        </div>
    );
}

export default Onama;